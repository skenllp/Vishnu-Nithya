/* Binds js/site-config.js to the page and injects reception blocks only when enabled. */
(function () {
  'use strict';
  var cfg = window.weddingConfig;
  if (!cfg) return;

  function get(path) {
    var cur = cfg, parts = path.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function bind(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-cfg]'), function (el) {
      var v = get(el.getAttribute('data-cfg'));
      if (typeof v === 'string' && v) {
        /* keep the designed line-break inside addresses */
        if (/address$/.test(el.getAttribute('data-cfg'))) {
          var bits = v.split(', ');
          var mid = Math.ceil(bits.length / 2);
          el.textContent = '';
          el.appendChild(document.createTextNode(bits.slice(0, mid).join(', ') + ','));
          el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(bits.slice(mid).join(', ')));
        } else {
          el.textContent = v;
        }
      }
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-cfg-href]'), function (el) {
      var v = get(el.getAttribute('data-cfg-href'));
      if (typeof v === 'string' && v) el.setAttribute('href', v);
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-cfg-tel]'), function (el) {
      var v = get(el.getAttribute('data-cfg-tel'));
      if (typeof v === 'string' && v) { el.textContent = v; el.setAttribute('href', 'tel:' + v.replace(/\s+/g, '')); }
    });
    Array.prototype.forEach.call(root.querySelectorAll('img[data-cfg-src]'), function (el) {
      var v = get(el.getAttribute('data-cfg-src'));
      if (typeof v === 'string' && v && el.getAttribute('src') !== v) el.setAttribute('src', v);
    });
  }

  function inject(tplId, host, mode, ref) {
    var tpl = document.getElementById(tplId);
    if (!tpl || !host) return;
    var frag = tpl.content.cloneNode(true);
    bind(frag);
    if (mode === 'after' && ref) ref.parentNode.insertBefore(frag, ref.nextSibling);
    else host.appendChild(frag);
  }

  function receptionReady(r) {
    return r && r.enabled === true && r.date && r.time && r.venue;
  }

  bind(document);

  if (cfg.media && cfg.media.audio) {
    var a = document.getElementById('bgAudio');
    if (a && a.getAttribute('src') !== cfg.media.audio) a.setAttribute('src', cfg.media.audio);
  }

  if (receptionReady(cfg.reception)) {
    inject('tpl-reception-fact', document.getElementById('factsList'));
    inject('tpl-reception-timeline', document.getElementById('timelineList'));
    inject('tpl-reception-venue', document.getElementById('venueGrid'));
    inject('tpl-reception-section', null, 'after', document.getElementById('ceremony'));
  }
})();
