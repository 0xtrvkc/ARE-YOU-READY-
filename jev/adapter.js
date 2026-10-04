/* Application adapter; all writes require an explicit action button. */
(function () {
  'use strict';
  function init() {
    JevUI.mount({
      title: 'Explain your reasoning',
      description:
        'After answering a checkpoint question, explain how you reached your answer. Jev selects a prewritten concept review; quiz scores and allocations stay deterministic.',
      fields: [
        {
          key: 'explanation',
          label: 'Your reasoning / อธิบายเหตุผลของคุณ',
          max: 2000,
          placeholder: 'I chose this because… / ฉันเลือกคำตอบนี้เพราะ…',
        },
      ],
      runLabel: 'Review my reasoning',
      input(v) {
        return { ...window.JevApp.questionContext(), explanation: v.explanation };
      },
    });
  }
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
