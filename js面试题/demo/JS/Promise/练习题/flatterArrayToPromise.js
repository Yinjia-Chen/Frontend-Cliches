// 给一个函数数组，要求返回一个新函数。
// 新函数接受一个参数（props），能保证数组里的所有函数能依次串行执行，且每个函数执行时都会传入参数（props）

// todo: 实现 flatterArrayToPromise



const flatterArrayToPromise = (funArr) => {
  return (props) => {
    return funArr.reduce((prevPromise, currentFun) => {
      return prevPromise.then(() => currentFun(props))
    }, Promise.resolve());
  };
};

// 每个函数执行时都会传入参数（props）：在每个函数调用时，将props作为参数传入。
// 串行执行：使用reduce方法，将每个函数的返回值（Promise）串联起来，(prevPromise.then)确保每个函数在前一个函数执行完毕后才执行。
// Promise是一个构造对象，而Promise.resolve()是构造对象的一个静态方法，返回一个已解决的Promise对象，这样方可进入reduce中作为prevPromise

function step1(props) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('step1', props);
      resolve();
    }, 1000);
  });
}

function step2(props) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('step2', props);
      resolve();
    }, 1000);
  });
}

const runSteps = flatterArrayToPromise([step1, step2]);
runSteps({ name: 'demoApp' }).then(() => {
  console.log('所有步骤执行完毕');
});