(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }



  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

  });
  
  // const menurefs = {
  //   openMenuBtn: document.querySelector("[data-menu-open]"),
  //   closeMenuBtn: document.querySelector("[data-menu-close]"),
  //   menu: document.querySelector("[data-menu]"),
  // };

  // menurefs.openMenuBtn.addEventListener("click", toggleMenu);
  // menurefs.closeMenuBtn.addEventListener("click", toggleMenu);

  // function toggleMenu() {
  //   menurefs.menu.classList.toggle("is-hidden");
  // }

  
})();