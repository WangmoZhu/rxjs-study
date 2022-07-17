// import './style.css';

// // import { Observable } from 'rxjs';

// // const stream$ = new Observable((subscriber) => {
// //   setTimeout(() => {
// //     subscriber.next([1, 2, 3]);
// //   }, 500);
// //   setTimeout(() => {
// //     subscriber.next({ a: 1000 });
// //   }, 1000);
// //   setTimeout(() => {
// //     console.log('still execute');
// //     subscriber.next('end');
// //   }, 3000);
// //   setTimeout(() => {
// //     console.log('still execute');
// //     subscriber.complete();
// //   }, 4000);
// // });

// // const subscription = stream$.subscribe({
// //   complete() {
// //     console.log('done');
// //   },
// //   next(v) {
// //     console.log(v);
// //   },
// //   error() {
// //     console.log('error');
// //   },
// // });

// // const subscription1 = stream$.subscribe({
// //   complete() {
// //     console.log('1done');
// //   },
// //   next(v) {
// //     console.log('1' + v);
// //   },
// //   error() {
// //     console.log('1error');
// //   },
// // });

// // setTimeout(() => {
// //   subscription.unsubscribe();
// // }, 1000);
// import * as Rx from 'rxjs';

// // const subject = new Subject();

// // subject.subscribe((v) => console.log('stream 1', v));

// // subject.subscribe((v) => console.log('stream 2', v));

// // setTimeout(() => {
// //   subject.subscribe((v) => console.log('stream 3', v));
// // }, 1000);

// // subject.next(1);
// // subject.next(2);

// // setTimeout(() => {
// //   subject.next(3);
// // }, 3000);
// // var handler = (e) => {
// //   console.log(e);
// //   document.body.removeEventListener('click', handler);
// // };
// // document.body.addEventListener('click', handler);

// // Observable.fromEvent(document.body, 'click').take(1);

// Rx.fromEvent(document.body, 'click').pipe(Rx.take(1)).subscribe(console.log);

// var ob = new Rx.Observable(function (observer) {
//   observer.next('Jerry');
//   observer.next('Kane');
//   // observer.complete();
//   observer.error('error');
// });

// // ob.subscribe(function (value) {
// //   console.log(value);
// // });

// const observer = {
//   next(value) {
//     console.log(value);
//   },
//   complete() {
//     console.log('complete');
//   },
//   error(err) {
//     console.error(err);
//   },
// };

// ob.subscribe(observer);
// const ob2 = Rx.of(...[1, 2, 3]);
// ob2.subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log('complete'),
// });

// // const ob3 = Rx.from(['a', 'b', 'c']);
// const ob3 = Rx.from('abc');
// ob3.subscribe({
//   next: (v) => console.log(v),
// });

// const ob4 = Rx.from(
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Hello RxJS');
//     }, 3000);
//   })
// );

// ob4.subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete!');
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });

// const ob5 = Rx.fromEvent(document.getElementsByTagName('body'), 'click');

// ob5.subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log('ob5 complete'),
// });

// class Producer {
//   constructor() {
//     this.listeners = [];
//   }
//   addListener(listener) {
//     if (typeof listener === 'function') {
//       this.listeners.push(listener);
//     } else {
//       throw new Error('listener 必須是 function');
//     }
//   }
//   removeListener(listener) {
//     this.listeners.splice(this.listeners.indexOf(listener), 1);
//   }
//   notify(message) {
//     this.listeners.forEach((listener) => {
//       listener(message);
//     });
//   }
// }
// // ------- 以上都是之前的程式碼 -------- //

// var egghead = new Producer();
// // egghead 同時具有 註冊監聽者及移除監聽者 兩種方法

// var source = Rx.fromEventPattern(
//   (handler) => egghead.addListener(handler),
//   (handler) => egghead.removeListener(handler)
// );

// source.subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete!');
//   },
//   error: function (error) {
//     console.log(error);
//   },
// });

// egghead.notify('Hello! Can you hear me?');
// // Hello! Can you hear me?

// const a = Rx.EMPTY;
// a.subscribe({
//   next: function (value) {
//     console.log(value);
//   },
//   complete: function () {
//     console.log('complete!');
//   },
// });
// Rx.NEVER;
// const e = Rx.throwError('s');

// // var st1 = Rx.Observable.create(function (observer) {
// //   var i = 0;
// //   setInterval(() => {
// //     observer.next(i++);
// //   }, 1000);
// // });

// // st1.subscribe({
// //   next: function (value) {
// //     console.log(value);
// //   },
// //   complete: function () {
// //     console.log('complete!');
// //   },
// //   error: function (error) {
// //     console.log('Throw Error: ' + error);
// //   },
// // });
// const st = Rx.interval(1000);
// const st2 = Rx.timer(1000, 5000);
// // st2.subscribe({
// //   next: function (value) {
// //     console.log(value);
// //   },
// //   complete: function () {
// //     console.log('complete!');
// //   },
// //   error: function (error) {
// //     console.log('Throw Error: ' + error);
// //   },
// // });

// const mapSt = st.pipe(Rx.map((v) => v * 10));
// // mapSt.subscribe(console.log);

import * as Rx from 'rxjs';
import { take } from 'rxjs/operators';

// const source = Rx.interval(1000);
// const example = source.pipe(Rx.take(3));
// example.subscribe({
//   next: (v) => console.log(v),
//   error: (err) => console.log(err),
//   complete: () => console.log('complete'),
// });

// Rx.fromEvent(document.body, 'click').pipe(Rx.first()).subscribe(console.log);
// const click = Rx.fromEvent(document.body, 'click');
// source.pipe(Rx.takeUntil(click)).subscribe({
//   next: (v) => console.log(v),
//   error: (err) => console.log(err),
//   complete: () => console.log('complete'),
// });

// const dragDOM = document.getElementById('drag');
// const body = document.body;

// const mouseDown = Rx.fromEvent(dragDOM, 'mousedown');
// const mouseUp = Rx.fromEvent(body, 'mouseup');
// const mouseMove = Rx.fromEvent(body, 'mousemove');

// type event = Event & { clientX: number; clientY: number };
// mouseDown
//   .pipe(Rx.map((e) => mouseMove.pipe(Rx.takeUntil(mouseUp))))
//   .pipe(Rx.concatAll())
//   .pipe(
//     Rx.map((m: event) => {
//       return {
//         x: m.clientX,
//         y: m.clientY,
//       };
//     })
//   )
//   .subscribe((pos) => {
//     console.log(pos);
//     dragDOM.style.left = pos.x + 'px';
//     dragDOM.style.top = pos.y + 'px';
//   });

// Rx.fromEvent(document.body, 'click').pipe(Rx.skip(3)).subscribe(console.log);

// var source = Rx.interval(1000).pipe(Rx.take(6));
// var example = source.pipe(Rx.takeLast(2));

// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

// Rx.concat
// var h = Rx.from('hello');
// var h1 = Rx.interval(1000);
// var x = Rx.zip(h, h1)
//   .pipe((x) => x)
//   .subscribe(console.log);
// h.pipe(Rx.scan((origin, next) => origin + next)).subscribe(console.log);

// var source = Rx.interval(1000).pipe(Rx.take(5));
// var example = source.pipe(Rx.delay(3000));
// example.subscribe({
//   next: (v) => console.log(v),
//   complete: () => console.log('complete'),
// });
// type event = Event & { clientX: number; clientY: number };
// var imgList = document.getElementsByTagName('img');
// var movePos = Rx.fromEvent(document, 'mousemove').pipe(
//   Rx.map((e: event) => ({ x: e.clientX, y: e.clientY }))
// );

// function followMouse(DOMArr: HTMLImageElement[]) {
//   const delayTime = 600;
//   DOMArr.forEach((item, index) => {
//     movePos
//       .pipe(Rx.delay(delayTime * Math.pow(0.65, index)))
//       .subscribe(function (pos) {
//         item.style.transform =
//           'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
//       });
//   });
// }

// followMouse(Array.from(imgList));

// var source = Rx.interval(1100).pipe(Rx.take(5));
// var example = source.pipe(Rx.debounceTime(1000));

// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

const searchInput = document.getElementById('searchInput');
const theRequestValue = document.getElementById('theRequestValue');
Rx.fromEvent(searchInput, 'input')
  // .pipe(Rx.debounceTime(1000))
  .pipe(Rx.throttleTime(1000))
  .pipe(
    Rx.map((e) => {
      let a: HTMLInputElement;
      a = e.target as HTMLInputElement;
      return (e.target as HTMLInputElement).value;
    })
  )
  .subscribe((v) => {
    theRequestValue.textContent = v;
  });

// var source = Rx.from(['a', 'b', 'c', 'c', 'b']).pipe(
//   Rx.zip(Rx.interval(300)).pipe()
// );
// var example = source.pipe(Rx.distinctUntilChanged());

// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

// RxJS v6+
// import { delay } from 'rxjs/operators';
// import { of, zip } from 'rxjs';

// const sourceOne = of('Hello');
// const sourceTwo = of('World!');
// const sourceThree = of('Goodbye');
// const sourceFour = of('World!');
// // 一直等到所有 observables 都发出一个值，才将所有值作为数组发出
// const example = zip(
//   sourceOne,
//   sourceTwo.pipe(delay(1000)),
//   sourceThree.pipe(delay(2000)),
//   sourceFour.pipe(delay(3000))
// );
// // 输出: ["Hello", "World!", "Goodbye", "World!"]
// const subscribe = example.subscribe((val) => console.log(val));
// RxJS v6+
// import { take } from 'rxjs/operators';
// import { interval, zip } from 'rxjs';

// // 每1秒发出值
// const source = interval(1000);
// // 当一个 observable 完成时，便不会再发出更多的值了
// const example = zip(source, source.pipe(take(2)));
// // 输出: [0,0]...[1,1]
// const subscribe = example.subscribe((val) => console.log(val));
// var source = Rx.from(['a', 'b', 'c', 'c', 'b'])
//           .pipe(Rx.zip(Rx.interval(300)).pipe(Rx.map(x => x))).subscribe(console.log)

// Rx.zip(Rx.interval(1000)).subscribe(console.log);

// const source = Rx.from(['a', 'b', 'c', 'c', 'b']);
// Rx.zip(source, Rx.interval(1000)).subscribe((x) => {
//   console.log(x[0]);
// });

// const source = Rx.zip(Rx.from(['a', 'b', 2, 'c', 'd']), Rx.interval(500)).pipe(
//   Rx.map((x) => x[0])
// );

// const example = source
//   .pipe(Rx.map((x) => x.toUpperCase()))
//   .pipe(Rx.catchError((err, ob) => Rx.EMPTY));
// // .pipe(Rx.retry());

// example.subscribe({
//   next: (v) => console.log(v),
//   error: (err) => console.log('Error: ' + err),
//   complete: () => console.log('complete'),
// });

// var click = Rx.fromEvent(document.body, 'click');
// var source = click.pipe(Rx.map((e) => Rx.interval(1000)));

// // var example = source.pipe(Rx.switchAll());
// // var example = source.pipe(Rx.concatAll());
// var example = source.pipe(Rx.mergeAll(3));
// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });
// var source = Rx.fromEvent(document.body, 'click');

// var example = source
//   .pipe(Rx.map((e) => Rx.interval(1000).pipe(Rx.take(3))))
//   .pipe(Rx.concatAll());

// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

// var source = Rx.fromEvent(document.body, 'click');
// var example = source.pipe(
//   Rx.concatMap((e) => Rx.interval(100).pipe(Rx.take(3)))
// );

// example.subscribe({
//   next: (value) => {
//     console.log(value);
//   },
//   error: (err) => {
//     console.log('Error: ' + err);
//   },
//   complete: () => {
//     console.log('complete');
//   },
// });

// var source = Rx.from([1, 2, 3, 4, 5]);
// var example = source.pipe(Rx.map((x) => x + 1));
// console.log(example);
// var source = Rx.interval(1000).pipe(Rx.take(3));
// var observerA = {
//   next: (v) => console.log('A next: ' + v),
//   error: (error) => console.log('A error: ' + error),
//   complete: () => console.log('A complete!'),
// };

// var observerB = {
//   next: (value) => console.log('B next: ' + value),
//   error: (error) => console.log('B error: ' + error),
//   complete: () => console.log('B complete!'),
// };
// custom
// var subject = {
//   observers: [],
//   subscribe: function (observer) {
//     this.observers.push(observer);
//   },
//   next: function (value) {
//     this.observers.forEach((o) => o.next(value));
//   },
//   error: function (error) {
//     this.observers.forEach((o) => o.error(error));
//   },
//   complete: function () {
//     this.observers.forEach((o) => o.complete());
//   },
// };
// subject.subscribe(observerA);
// source.subscribe(subject);

// setTimeout(() => {
//   subject.subscribe(observerB);
// }, 1100);

// var subject = new Rx.Subject();
// subject.subscribe(observerA);
// source.subscribe(subject);

// setTimeout(() => {
//   subject.subscribe(observerB);
// }, 1000);

// var subject = new Rx.BehaviorSubject(0); // 0 為起始值
// var observerA = {
//   next: (value) => console.log('A next: ' + value),
//   error: (error) => console.log('A error: ' + error),
//   complete: () => console.log('A complete!'),
// };

// var observerB = {
//   next: (value) => console.log('B next: ' + value),
//   error: (error) => console.log('B error: ' + error),
//   complete: () => console.log('B complete!'),
// };

// subject.subscribe(observerA);
// // "A next: 0"
// subject.next(1);
// // "A next: 1"
// subject.next(2);
// // "A next: 2"
// subject.next(3);
// // "A next: 3"

// setTimeout(() => {
//   subject.subscribe(observerB);
//   // "B next: 3"
// }, 3000);
// var subject = new Rx.ReplaySubject(2); // 重複發送最後 2 個元素
// var observerA = {
//   next: (value) => console.log('A next: ' + value),
//   error: (error) => console.log('A error: ' + error),
//   complete: () => console.log('A complete!'),
// };

// var observerB = {
//   next: (value) => console.log('B next: ' + value),
//   error: (error) => console.log('B error: ' + error),
//   complete: () => console.log('B complete!'),
// };

// subject.subscribe(observerA);
// subject.next(1);
// // "A next: 1"
// subject.next(2);
// // "A next: 2"
// subject.next(3);
// // "A next: 3"

// setTimeout(() => {
//   subject.subscribe(observerB);
//   // "B next: 2"
//   // "B next: 3"
// }, 3000);

// var subject = new Rx.AsyncSubject();
// var observerA = {
//   next: (value) => console.log('A next: ' + value),
//   error: (error) => console.log('A error: ' + error),
//   complete: () => console.log('A complete!'),
// };

// var observerB = {
//   next: (value) => console.log('B next: ' + value),
//   error: (error) => console.log('B error: ' + error),
//   complete: () => console.log('B complete!'),
// };

// subject.subscribe(observerA);
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.complete();
// // "A next: 3"
// // "A complete!"

// setTimeout(() => {
//   subject.subscribe(observerB);
//   // "B next: 3"
//   // "B complete!"
// }, 3000);
// var source = Rx.interval(1000);
//   .pipe(Rx.take(3))
//   .pipe(Rx.multicast(new Rx.Subject()));
// var observerA = {
//   next: (value) => console.log('A next: ' + value),
//   error: (error) => console.log('A error: ' + error),
//   complete: () => console.log('A complete!'),
// };

// var observerB = {
//   next: (value) => console.log('B next: ' + value),
//   error: (error) => console.log('B error: ' + error),
//   complete: () => console.log('B complete!'),
// };

// source.subscribe(observerA); // subject.subscribe(observerA)

// source.connect(); // source.subscribe(subject)

// setTimeout(() => {
//   source.subscribe(observerB); // subject.subscribe(observerB)
// }, 1000);

// var source = Rx.Observable.interval(1000)
//              .share();

// var source = Rx.Observable.interval(1000)
//             .publish()
//             .refCount();

// var source = Rx.Observable.interval(1000)
//   .multicast(new Rx.Subject())
//   .refCount();
// source.pipe(Rx.observeOn(Rx.asyncScheduler));

const ob = Rx.interval(1000).pipe(
  Rx.take(5),
  Rx.map((x) => x + 1)
);

ob.subscribe(console.log);
