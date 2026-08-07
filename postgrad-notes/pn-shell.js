// Postgrad Notes shared shell — scroll progress bar with section checkpoints,
// matching the main site's progress-checkpoints component.
(function () {
  function init() {
    var container = document.createElement('div');
    container.className = 'progress-bar-container';
    var fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    container.appendChild(fill);

    var checkpointsWrap = document.createElement('div');
    checkpointsWrap.className = 'progress-checkpoints';
    container.appendChild(checkpointsWrap);

    // Checkpoints: page top + up to 7 section headings, sampled evenly on long docs
    var main = document.querySelector('main') || document.body;
    var headings = Array.prototype.slice.call(main.querySelectorAll('h2'));
    if (headings.length > 7) {
      var step = (headings.length - 1) / 6;
      var sampled = [];
      for (var i = 0; i < 7; i++) {
        var h = headings[Math.round(i * step)];
        if (sampled.indexOf(h) === -1) sampled.push(h);
      }
      headings = sampled;
    }

    var targets = [{ el: null, label: 'Top' }];
    headings.forEach(function (h) {
      targets.push({ el: h, label: h.textContent.trim() });
    });

    targets.forEach(function (t) {
      var cp = document.createElement('div');
      cp.className = 'checkpoint';
      cp.title = t.label;
      var dot = document.createElement('div');
      dot.className = 'checkpoint-dot';
      cp.appendChild(dot);
      var label = document.createElement('span');
      label.className = 'checkpoint-label';
      label.textContent = t.label;
      cp.appendChild(label);
      cp.addEventListener('click', function () {
        if (!t.el) window.scrollTo({ top: 0, behavior: 'smooth' });
        else t.el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      checkpointsWrap.appendChild(cp);
    });

    document.body.insertBefore(container, document.body.firstChild);
    var checkpointEls = checkpointsWrap.querySelectorAll('.checkpoint');

    function update() {
      var winH = window.innerHeight;
      var docH = document.documentElement.scrollHeight - winH;
      var progress = docH > 0 ? (window.scrollY / docH) * 100 : 100;
      fill.style.width = Math.min(100, progress) + '%';

      var mid = winH / 2;
      var activeIndex = 0;
      for (var i = 1; i < targets.length; i++) {
        if (targets[i].el.getBoundingClientRect().top <= mid) activeIndex = i;
      }
      checkpointEls.forEach(function (cp, idx) {
        cp.classList.toggle('active', idx <= activeIndex);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
