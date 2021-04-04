const CallBack2 = () => {
    console.log('1');
    setTimeout(() => console.log('2'), 1000);
    console.log('3');

    const printImmediately = (print) => print();

    printImmediately(() => console.log('hello'));

    const printWithDelay = (print, timeout) => print(print, timeout);

    printWithDelay(() => console.log('async callback'), 2000);

    return (
        <>
            <div className="CallBack2">
                <p>CallBack2</p>
            </div>
        </>
    );
};
export default CallBack2;
