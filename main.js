const animation_length = 50;

const frames = [
   // r   g    b     r    g    b
   [244, 162, 162,  240, 223, 133], // Initial screen
   [239, 222, 159,  242, 130, 129], // Milena, hi
   [242, 130, 129,  195, 132, 245], // I love you
   [195, 132, 245,  132, 177, 245], // You know...
   [132, 157, 245,  168, 233, 157], // My mistakes...
   [164, 227, 153,  233, 216, 155], // invite
]

    // 'Milena, hi' page
let hm_page, hm_title, hm_subtitle, hm_f1, hm_f2, hm_f3, hm_heart, hm_heart_text,
    // 'Love you' page
    lu_page, lu_1, lu_2, lu_3, lu_4, lu_5, lu_6, lu_7, lu_image, lu_l, lu_r, lu_next, lu_comment,
    // 'You know' page
    yk_page, yk_1, yk_2, yk_3, yk_4, yk_5, yk_6, yk_7, yk_8, yk_9, yk_10, yk_11, yk_12, yk_l, yk_r, yk_next, yk_comment,
    yk_image,
    // 'My mistakes' page
    mm_page, mm_1, mm_2, mm_3, mm_4, mm_5, mm_6, mm_7, mm_8, mm_9, mm_10, mm_11, mm_12, mm_13, mm_14, mm_l, mm_r,
    mm_next, mm_comment, mm_image,
    // 'Invite' page
    i_page, i_1, i_2, i_3, i_4, i_5, i_6, i_7, i_8, i_9, i_10, i_11, i_12, i_13, i_14, i_image, i_comment, i_b;

let tec_frame = 0;

const get = (id) => {
   return document.getElementById(id);
}

const animate_bg = (from, to) => {
   const main_background = get('main-background');
   let f_id = 0;

   const r = from[0] - to[0];
   const g = from[1] - to[1];
   const b = from[2] - to[2];
   const r2 = from[3] - to[3];
   const g2 = from[4] - to[4];
   const b2 = from[5] - to[5];

   const animation = setInterval(() => {
      const percent = f_id / animation_length;

      const text = `background: linear-gradient(165.32deg, ` +
         `rgba(${from[0] - r * percent}, ${from[1] - g * percent}, ${from[2] - b * percent}, 1) 0%, ` +
         `rgba(${from[3] - r2 * percent}, ${from[4] - g2 * percent}, ${from[5] - b2 * percent}, 1) 100%);`

      main_background.setAttribute('style', text);

      f_id++;
      if (f_id >= animation_length) {
         clearInterval(animation);
      }
   }, 20); // 50 fps
}

const remove = (el, time) => {
   setTimeout(() => {
      el.style.opacity = '0'
      el.style.marginTop = '-4vw'
   }, time);
}

const remove_n = (...elements) => {
   for (const el of elements) {
      el.style.opacity = '0'
      el.style.marginTop = '-4vw'
   }
}

document.addEventListener("DOMContentLoaded", () => {
   animate_bg(frames[0], frames[1]);
   tec_frame = 1;

   hm_page = get('hi-milena-page');  hm_title = get('hi-milena');
   lu_page = get('love-you-page');   hm_subtitle = get('hi-milena-2');
   hm_f1 = get('hi-milena-3');       hm_heart = get('hi-milena-heart');
   hm_f2 = get('hi-milena-4');       hm_heart_text = get('hi-milena-heart-text');
   hm_f3 = get('hi-milena-5');       lu_4 = get('lu-4')
   lu_1 = get('lu-1');               lu_5 = get('lu-5')
   lu_2 = get('lu-2');               lu_6 = get('lu-6')
   lu_3 = get('lu-3');               lu_7 = get('lu-7')
   lu_l = get('lu-image-l');         lu_image = get('lu-image')
   lu_r = get('lu-image-r');         yk_page = get('you-know-page')
   lu_next = get('lu-next');         yk_next = get('yk-next')
   lu_comment = get('lu-comment');   yk_comment = get('yk-comment')
   yk_1 = get('yk-1');               yk_7 = get('yk-7')
   yk_2 = get('yk-2');               yk_8 = get('yk-8')
   yk_3 = get('yk-3');               yk_9 = get('yk-9')
   yk_4 = get('yk-4');               yk_10 = get('yk-10')
   yk_5 = get('yk-5');               yk_11 = get('yk-11')
   yk_6 = get('yk-6');               yk_12 = get('yk-12')
   yk_l = get('yk-image-l');         yk_image = get('yk-image');
   yk_r = get('yk-image-r');         mm_page = get('my-mistakes-page');
   mm_image = get('mm-image');       mm_l = get('mm-image-l');
   mm_next = get('mm-next');         mm_r = get('mm-image-r');
   mm_comment = get('mm-comment');   mm_8 = get('mm-8');
   mm_1 = get('mm-1');               mm_9 = get('mm-9');
   mm_2 = get('mm-2');               mm_10 = get('mm-10');
   mm_3 = get('mm-3');               mm_11 = get('mm-11');
   mm_4 = get('mm-4');               mm_12 = get('mm-12');
   mm_5 = get('mm-5');               mm_13 = get('mm-13');
   mm_6 = get('mm-6');               mm_14 = get('mm-14');
   mm_7 = get('mm-7');               i_page = get('invite-page');
   i_image = get('i-image');         i_comment = get('i-comment');
   i_1 = get('i-1');                 i_8 = get('i-8');
   i_2 = get('i-2');                 i_9 = get('i-9');
   i_3 = get('i-3');                 i_10 = get('i-10');
   i_4 = get('i-4');                 i_11 = get('i-11');
   i_5 = get('i-5');                 i_12 = get('i-12');
   i_6 = get('i-6');                 i_13 = get('i-13');
   i_7 = get('i-7');                 i_14 = get('i-14');
   i_b = get('i-image-b');

   // Show hi milena page elements
   setTimeout(() => hm_title.style.opacity = '1', 100);
   setTimeout(() => hm_subtitle.style.opacity = '1', 250);
   setTimeout(() => hm_f1.style.opacity = '1', 450);
   setTimeout(() => hm_f2.style.opacity = '1', 650);
   setTimeout(() => hm_f3.style.opacity = '1', 850);
   setTimeout(() => hm_heart.style.opacity = '1', 1100);
   setTimeout(() => hm_heart_text.style.animation = 'fadein 2.2s ease-in-out infinite', 1500);
});

const hi_milena_click = () => {
   animate_bg(frames[1], frames[2]);

   // Remove hi milena page elements
   remove_n(hm_title);

   remove(hm_subtitle, 50);
   remove(hm_f1, 50 * 2);
   remove(hm_f2, 50 * 3);
   remove(hm_f3, 50 * 4);

   remove(hm_heart, 50 * 6);
   setTimeout(() => {
      hm_heart_text.style.animation = ''
      hm_heart_text.style.opacity = '0'
   }, 50 * 7);

   setTimeout(() => hm_page.style.visibility = 'hidden', 50 * 7 + 500);

   // Show ILU page elements
   setTimeout(() => {
      lu_page.style.visibility = 'visible';
      lu_1.style.opacity = '1';
   }, 80 * 7);
   setTimeout(() => lu_2.style.opacity = '1', 80 * 8);
   setTimeout(() => {
      lu_3.style.opacity = '1';
      lu_image.style.opacity = '0.8';
   }, 80 * 9);
   setTimeout(() => lu_4.style.opacity = '1', 80 * 10);
   setTimeout(() => lu_5.style.opacity = '1', 80 * 11);
   setTimeout(() => lu_6.style.opacity = '1', 80 * 12);
   setTimeout(() => lu_7.style.opacity = '1', 80 * 14);
   setTimeout(() => {
      lu_r.style.opacity = '0.78'
      lu_l.style.opacity = '0.78'
   }, 80 * 16);
   setTimeout(() => {
      lu_next.style.opacity = '0.8'
      lu_comment.style.animation = 'fadein 2.2s ease-in-out infinite'
   }, 80 * 17);

   tec_frame = 2;
}

const lu_click = () => {
   animate_bg(frames[2], frames[3]);

   // Remove ILU page elements
   remove_n(lu_1)
   remove(lu_2, 40);

   setTimeout(() => {
      remove_n(lu_3, lu_image)
   }, 40 * 2);

   remove(lu_4, 40 * 3);
   remove(lu_5, 40 * 4);
   remove(lu_6, 40 * 5);
   remove(lu_7, 40 * 6);

   setTimeout(() => {
      lu_comment.style.animation = '';
      remove_n(lu_r, lu_l, lu_next, lu_comment);
   }, 40 * 7);

   setTimeout(() => lu_page.style.visibility = 'hidden', 40 * 7 + 500);

   // Show You know page elements
   setTimeout(() => {
      yk_page.style.visibility = 'visible';
      yk_1.style.opacity = '1';
   }, 40 * 7);
   setTimeout(() => yk_2.style.opacity = '1', 40 * 8);
   setTimeout(() => yk_3.style.opacity = '1', 40 * 9);
   setTimeout(() => yk_4.style.opacity = '1', 40 * 10);
   setTimeout(() => yk_5.style.opacity = '1', 40 * 11);
   setTimeout(() => yk_6.style.opacity = '1', 40 * 12);
   setTimeout(() => {
      yk_7.style.opacity = '1'
      yk_image.style.opacity = '1'
   }, 40 * 13);
   setTimeout(() => yk_8.style.opacity = '1', 40 * 14);
   setTimeout(() => yk_9.style.opacity = '1', 40 * 15);
   setTimeout(() => yk_10.style.opacity = '1', 40 * 16);
   setTimeout(() => yk_11.style.opacity = '1', 40 * 17);
   setTimeout(() => yk_12.style.opacity = '1', 40 * 18);
   setTimeout(() => {
      yk_r.style.opacity = '0.78'
      yk_l.style.opacity = '0.78'
   }, 40 * 19);
   setTimeout(() => {
      yk_next.style.opacity = '0.8'
      yk_comment.style.animation = 'fadein 2.2s ease-in-out infinite'
   }, 40 * 20);

   tec_frame = 3;
}

const yk_click = () => {
   animate_bg(frames[3], frames[4]);

   // Remove You know page elements
   remove_n(yk_1)
   remove(yk_2, 40);
   remove(yk_3, 40 * 2);
   remove(yk_4, 40 * 3);
   remove(yk_5, 40 * 4);
   remove(yk_6, 40 * 5);
   setTimeout(() => {
      remove_n(yk_7, yk_image)
   }, 40 * 6);
   remove(yk_8, 40 * 7);
   remove(yk_9, 40 * 8);
   remove(yk_10, 40 * 9);
   remove(yk_11, 40 * 11);
   remove(yk_12, 40 * 12);
   setTimeout(() => {
      yk_r.style.opacity = '0'
      yk_l.style.opacity = '0'
   }, 40 * 13);
   setTimeout(() => {
      yk_next.style.opacity = '0'
      yk_comment.style.animation = ''
   }, 40 * 14);

   setTimeout(() => yk_page.style.visibility = 'hidden', 40 * 14 + 500);

   // Show My mistakes page elements
   setTimeout(() => {
      mm_page.style.visibility = 'visible';
      mm_1.style.opacity = '1';
   }, 40 * 14);
   setTimeout(() => mm_2.style.opacity = '1', 40 * 15);
   setTimeout(() => mm_3.style.opacity = '1', 40 * 16);
   setTimeout(() => {
      mm_4.style.opacity = '1'
      mm_image.style.opacity = '1'
   }, 40 * 17);
   setTimeout(() => mm_5.style.opacity = '1', 40 * 18);
   setTimeout(() => mm_6.style.opacity = '1', 40 * 20);
   setTimeout(() => mm_7.style.opacity = '1', 40 * 21);
   setTimeout(() => mm_8.style.opacity = '1', 40 * 22);
   setTimeout(() => mm_9.style.opacity = '1', 40 * 23);
   setTimeout(() => mm_10.style.opacity = '1', 40 * 24);
   setTimeout(() => mm_11.style.opacity = '1', 40 * 25);
   setTimeout(() => mm_12.style.opacity = '1', 40 * 26);
   setTimeout(() => mm_13.style.opacity = '1', 40 * 28);
   setTimeout(() => mm_14.style.opacity = '1', 40 * 29);

   setTimeout(() => {
      mm_r.style.opacity = '0.9'
      mm_l.style.opacity = '0.9'
   }, 40 * 30);
   setTimeout(() => {
      mm_next.style.opacity = '0.9'
      mm_comment.style.animation = 'fadein 2.2s ease-in-out infinite'
   }, 40 * 31);

   tec_frame = 4;
}

const mm_click = () => {
   animate_bg(frames[4], frames[5]);

   // Remove My mistakes page elements
   remove_n(mm_1);
   remove(mm_2, 40);
   setTimeout(() => {
      remove_n(mm_3, mm_image)
   }, 40 * 2);

   remove(mm_4, 40 * 3);
   remove(mm_5, 40 * 4);
   remove(mm_6, 40 * 6);
   remove(mm_7, 40 * 7);
   remove(mm_8, 40 * 8);
   remove(mm_9, 40 * 9);
   remove(mm_10, 40 * 10);
   remove(mm_11, 40 * 11);
   remove(mm_12, 40 * 12);
   remove(mm_13, 40 * 14);
   remove(mm_14, 40 * 15);

   setTimeout(() => {
      mm_r.style.opacity = '0'
      mm_l.style.opacity = '0'
   }, 40 * 17);
   setTimeout(() => {
      mm_next.style.opacity = '0'
      mm_comment.style.animation = ''
   }, 40 * 18);

   setTimeout(() => mm_page.style.visibility = 'hidden', 40 * 18 + 500);

   // Show invite page elements
   setTimeout(() => {
      i_page.style.visibility = 'visible';
      i_1.style.opacity = '1';
      i_image.style.opacity = '1';
   }, 40 * 18);
   setTimeout(() => i_2.style.opacity = '1', 40 * 19);
   setTimeout(() => i_3.style.opacity = '1', 40 * 20);
   setTimeout(() => i_4.style.opacity = '1', 40 * 21);
   setTimeout(() => i_5.style.opacity = '1', 40 * 22);
   setTimeout(() => i_6.style.opacity = '1', 40 * 23);
   setTimeout(() => i_7.style.opacity = '1', 40 * 24);
   setTimeout(() => i_8.style.opacity = '1', 40 * 25);
   setTimeout(() => i_9.style.opacity = '1', 40 * 26);
   setTimeout(() => i_10.style.opacity = '1', 40 * 27);
   setTimeout(() => i_11.style.opacity = '1', 40 * 28);

   setTimeout(() => i_12.style.opacity = '1', 40 * 30);
   setTimeout(() => i_13.style.opacity = '1', 40 * 31);
   setTimeout(() => i_14.style.opacity = '1', 40 * 32);

   setTimeout(() => i_comment.style.opacity = '1', 40 * 34);
   setTimeout(() => i_b.style.opacity = '1', 40 * 35);

   tec_frame = 5;
}
