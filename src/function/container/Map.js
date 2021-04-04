import React, { Component } from 'react';

class Map extends Component {
    componentDidMount() {
        let Map_Arr = [3, 2, 8, 8];
        let Map_newArr = Map_Arr.map((x) => x);
        console.log('1. Map_newArr : [' + Map_newArr + ']');

        let Map_mulitiArr = Map_Arr.map((x) => x * 2);
        console.log('2. Map_mulitiArr : [' + Map_mulitiArr + ']');

        let ObjArray = [
            { key: 'react', value: '200' },
            { key: 'react', value: 'TwoHundred' },
        ];
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log(index + 3 + '. obj : ' + JSON.stringify(obj));
            let Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log('5. Map_objArr : ' + JSON.stringify(Map_objArr));
    }

    render() {
        return <h2>[THIS IS Map]</h2>;
    }
}
export default Map;
