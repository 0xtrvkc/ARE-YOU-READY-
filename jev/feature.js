/* Bounded decisions for this application. */
(function (root, factory) {
  const api = factory(
    root.JevContract || (typeof require === 'function' ? require('./contract.js') : null),
  );
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.JevFeature = api;
})(globalThis, function (C) {
  'use strict';

  const lessons = {
    risk: 'Risk capacity depends on your runway and ability to absorb losses; it differs from confidence or willingness.',
    diversification:
      'Diversification reduces concentration. Several highly correlated holdings can still behave like one bet.',
    beta: 'Beta describes exposure to a benchmark or common factors; it is not guaranteed profit.',
    alpha:
      'Alpha is performance unexplained by the specified factor model. A quiz score does not prove a repeatable edge.',
    grid: 'A grid can accumulate losses in a persistent trend; repeated small wins do not make it risk-free.',
    indicator:
      'An indicator describes or transforms data. Its signal does not guarantee the next price move.',
    expectancy:
      'Expectancy combines win probability, average win, average loss and trading costs. Win rate alone is insufficient.',
    none: 'No clear misconception was established. Revisit the exact question and assumptions.',
  };
  const thai = {
    risk: 'ความสามารถรับความเสี่ยงขึ้นอยู่กับเงินสำรองและความสามารถรับผลขาดทุน ไม่ใช่แค่ความมั่นใจ',
    diversification:
      'การกระจายลงทุนช่วยลดการกระจุกตัว แต่สินทรัพย์ที่สัมพันธ์กันสูงอาจเคลื่อนไหวเหมือนการเดิมพันเดียว',
    beta: 'Beta คือการตอบสนองต่อปัจจัยหรือตลาดอ้างอิง ไม่ได้รับประกันกำไร',
    alpha:
      'Alpha คือผลตอบแทนที่แบบจำลองปัจจัยอธิบายไม่ได้ คะแนนแบบทดสอบไม่ได้พิสูจน์ความได้เปรียบที่ทำซ้ำได้',
    grid: 'Grid อาจสะสมผลขาดทุนเมื่อตลาดมีแนวโน้มต่อเนื่อง กำไรเล็กหลายครั้งไม่ได้แปลว่าไม่มีความเสี่ยง',
    indicator: 'Indicator ใช้อธิบายหรือแปลงข้อมูล สัญญาณไม่ได้รับประกันการเคลื่อนไหวครั้งถัดไป',
    expectancy:
      'Expectancy ต้องรวมโอกาสชนะ กำไรเฉลี่ย ขาดทุนเฉลี่ย และต้นทุน Win rate อย่างเดียวไม่เพียงพอ',
    none: 'ยังไม่พบความเข้าใจผิดที่ชัดเจน ลองทบทวนโจทย์และสมมติฐานอีกครั้ง',
  };
  const F = {
    id: 'learning-coach',
    private: false,
    lessons,
    build(input) {
      const question = C.text(input.question, 'Quiz question', 2000),
        explanation = C.text(input.explanation, 'Your explanation', 2000);
      return {
        state: {
          question,
          explanation,
          correctAnswer: C.text(input.correctAnswer, 'Reference answer', 2000),
        },
        questions: {
          concept: C.choice(
            'Which single misconception is most clearly expressed in `explanation`, evaluated against `question` and `correctAnswer`? Correct or ambiguous explanations must return none. Do not diagnose financial skill.',
            {
              risk: 'Confuses willingness with capacity or emergency runway',
              diversification: 'Misunderstands concentration or correlation',
              beta: 'Misunderstands beta or benchmark exposure',
              alpha: 'Misunderstands alpha, factor adjustment or evidence of skill',
              grid: 'Assumes grids are always profitable or safe in trends',
              indicator: 'Treats indicators as certain predictions',
              expectancy: 'Confuses win rate with expected net profit',
              none: 'No clear misconception or insufficient context',
            },
          ),
        },
      };
    },
    present(input, answers) {
      const k = C.decision(answers.concept);
      return [
        {
          title: input.lang === 'th' ? 'ทบทวนแนวคิด' : 'Concept review',
          label:
            input.lang === 'th'
              ? k === 'review'
                ? 'ต้องทบทวน'
                : k === 'none'
                  ? 'ยังไม่พบความเข้าใจผิด'
                  : k
              : k === 'review'
                ? 'Needs review'
                : k === 'none'
                  ? 'No clear misconception'
                  : k,
          detail:
            input.lang === 'th'
              ? k === 'review'
                ? 'ลองอธิบายเหตุผลเพิ่มอีกหน่อย'
                : thai[k]
              : k === 'review'
                ? 'Try explaining your reasoning with more detail.'
                : lessons[k],
          confidence: answers.concept.confidence,
        },
      ];
    },
  };

  return Object.freeze(F);
});
