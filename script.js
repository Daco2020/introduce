//스크롤이 내려감에따라 navbar에 표시가 된다
let sections = document.querySelectorAll("section"); // 모든 section태그 선택 

const inView = (section) => {
  //  해당섹션 범위내에 있으면 true아니면 false 리턴
    let top = section.offsetTop;
    let height = section.offsetHeight;

        while (section.offsetParent) {
    section = section.offsetParent;
    top += section.offsetTop;
    }
        return (
    top < window.pageYOffset + window.innerHeight &&
    top + height > window.pageYOffset
    );
};
window.onscroll = () => {
  // 스크롤을 내릴떄마다 호출이되는 window 이벤트
    let next = false;
    sections.forEach((section) => {
        let menu = document.querySelector(`a[href='#${section.id}']`);// 섹션과 관련된 메뉴를 찾아옴

        if (inView(section) && !next) { // 스크린범위 안에 있으면 해당메뉴에 active부여 
            menu.classList.add("active");
            next = true;
        } else {
            menu.classList.remove("active");// 아닐시에 active제거
        }
    });
};