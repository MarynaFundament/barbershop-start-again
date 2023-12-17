(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is_hidden");
    }
  })();



  (() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
      body: document.querySelector("body"),
      menuList: document.querySelector(".menu-list"),

    };

    console.log(refs.openMenuBtn);
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.menuList.addEventListener("click", removeMenu);

  
    function toggleMenu() {
      refs.menu.classList.toggle("is_hidden");
      refs.body.classList.toggle("no-scroll");
    }

    function removeMenu() {
      refs.menu.classList.add("is_hidden");
      refs.body.classList.remove("no-scroll");
    }



  })();