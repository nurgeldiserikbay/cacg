export default {
  methods: {
    animateFrom(elem) {
      let y = 100;
      elem.style.transform = "translateY(" + y + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(
        elem, {
          y: y,
          autoAlpha: 0
        }, {
          duration: 0.8,
          delay: elem.dataset.gsapduration || 0,
          y: 0,
          autoAlpha: 1,
          ease: "sine",
          overwrite: "auto",
        }
      );
    },
    hide(elem) {
      gsap.set(elem, {
        autoAlpha: 0
      });
    },
    scrollTriggerInit() {
      let $this = this;
      gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        $this.hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          start: "top 90%",
          once: true,
          onEnter: function () {
            $this.animateFrom(elem);
          },
        });
      });
    },
  },
  mounted() {
    this.scrollTriggerInit();
  },
}
