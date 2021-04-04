const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello ');
        resolve('World!');
        reject('Error!');
    }, 2000);
});

promise
    .then((response) => {
        console.log(response);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('JavaScript Programming');
                resolve('~~!!~!');
            }, 1000);
        });
    })
    .then((response) => console.log('Success'))
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Promise: 나는 무조건 실행된다');
    });

const PromiseTest = () => {
    console.log('PromiseTest Start');

    console.log('PromiseTest Fin');
    return (
        <>
            <div className="PrimiseTEst">
                <p>PromiseTest</p>
            </div>
        </>
    );
};
export default PromiseTest;
