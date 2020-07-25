- 직접 하던 도중 깨달은 것

# HTML

1. video tag에 쓸 거면 webm file로 해야 할듯. mp4나 avi는 지원 안 하는 브라우저가 늘고 있는 추세인 것 같다.

- 첫 수강 동안 깨달은 것
  **\*\***2. 웹 디자인의 가장 첫 단계는 바로 html box 모델 생각하기.
  -> 큰 박스에서 작은 박스로 세분화

  거대한 박스를 섹션으로 나누고 들어가는 게 중요. 난 다 같은 층위로 놔서 너무 복잡함.
  그 이후에도 해시태그 div 하나 title div 하나 이렇게 각각 두지 말고 층위 별로 딱딱. 그걸 모두 감싸는 div 태그가 있어야지

3. wireframing 을 활용하자. - 전반적인 구조 잡기 (a4 용지에 슥슥 그려보기)
   그리고 labeling 하기. 즉, 내가 만든 레이아웃 부분들의 이름 정해주기

이 2,3번 단계만 거치면 html markup을 매우 빠르게 할 수 있다!

4. color tool 좋다. 색깔 추천 해줌

\*\*5. semantic tag 이용하자. 가장 거대하게 나누는 markup 에는 section 태그 활용!

6. 텍스트 쓸 때 span 태그!

7. 레이아웃 짤 때 + 활용하면 더 편하고 빠르게 (emmet)

8. markup 먼저 하고 css로 들어가기!

- 라스트 비교하면서 깨달은 것

9.  반응형으로 만들 때까지 생각해보면 섹션을 어떻게 나눠야 할 지 알텐디!! 아주 큰 단위로 잘라 먹어야 함.

10. html markup이 제대로 안 되어 있음. 큰 부분 보는 것도 부족하고, 그 큰 부분 안에 또 큰 부분을 보는 것도 부족. 잘 구조화할 수 있도록 연습하자.

11. hashtag 처럼 딱 봐도 ul 로 처리해야 할 거는 리스트로 만들어야지 그걸 다 쓰고 있누, 그 인터랙티브 아이콘들도 마찬가지. 이것도 리스트로 처리하는 게 적절해 보이네. 고민할 것이 div span ul 밖에 없으니 적절히 좀 사용해봅시다

- up next 이후 나오는 동영상 목록도 하나의 리스트라고 볼 수 있구나. 나열 되어 있다 하면 ul 태그 활용할 수 있도록 하자.

--> 무조건 div 태그 지양. 너무 많아. 의미 없이. 적절하게 span, ul, section, 등으로 교체하자

12. 누르는 건 버튼 태그 활용하자

# CSS

1. 스타일링 할 때 html이랑 css랑 동시에 보는 법 -> drag해서 오른편에 띄우삼

2. CSS 변수를 활용하자! :root {
   <!-- color -->
   --white-color:
   --black-color:

  <!-- size -->

--side-padding: 12px;

  <!-- font size -->

--font-large: 18px;
--font-medium: 14px;
}

요런 식으로!

3. mini css reset

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

이렇게 2, 3번 단계처럼 앞으로의 과정을 좀 적어놓고 시작하는 게 편하다!

4. 나는 아무 생각 없이 했지만, video width 값에 %를 주는 건 반응형 홈페이지를 만들기 위함.

5. 나는 position: fixed 했었는데, position: sticky 이용하면 되네!

6. video 스타일링할 때 width 100%, height 100%로 반응형 만든 다음에
   max-width 사용하여 너무 꽉 차는 거 방지

7. 적용하고자 하는 범위를 최대한 작게 작게 하는 것이 중요. 뭐의 뭐의 뭐 이런 식으로!

8. button 태그 reset 하는 법!
   button, button:focus {
   border: none;
   cursor: pointer;
   outline: none;
   }

button:focus 는 눌렸을 때를 의미하는 가상 class.

9. css line clamp 검색해보자 - 글의 양 제한하긔

10. flex option - flex shrink 등 설정해서 반응형으로 구성하기

flex: 1 1 35%
flex: 1 1 60% 요렇게!

11. 같은 이름의 class 들 중 원하는 것만 주는 테크닉 : 직속 자식 > 이용

## 강의 이후

1. i 태그 중에서 active class 가 있는 애들 선택자 -> i.active

i .active 는 i 태그의 자식 태그 중 active class가 있는 애들에 대한 선택자!

2. flex 옵션으로 flex-basis 설정해줘도 안 먹히는 이유는, img 파일이 반응형이 아니라서 그럼. 그럴 때는 img 태그 상위 div 하나 만들어주고 img width를 100% 해주면 반응형으로 만들 수 있다.

3. button {
   transform: rotate(180deg);
   }

이 태그와 js 결합하면 누를 때마다 180도 돌아가게 할 수 있군!

4. css transition: transform 300ms ease-in-out;
   요런 것도 센스 있게 활용하면 훨씬 이쁜 반응형 홈페이지 만들기 10가능!
