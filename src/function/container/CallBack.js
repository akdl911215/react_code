const CallBack = () => {
    const callbackAcceptingFunction1 = (fn) => fn(1, 2, 3, 4);

    const callbackAcceptingFunction2 = (fn) => fn(4, 2, 1);

    const callback = (arg1, arg2, arg3) => arg1 + arg2 + arg3;

    const result1 = callbackAcceptingFunction1(callback);
    console.log(result1);

    const result2 = callbackAcceptingFunction2(callback);
    console.log(result2);

    return (
        <div className="CallBack">
            <p>CallBack</p>
        </div>
    );
};
export default CallBack;
