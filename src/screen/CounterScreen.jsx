import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from '../redux/counterSlice';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';


const CounterScreen = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <TextComponent text='CounterScreen' textSize={30} isBold={true} />
            <TextComponent text={count} textSize={50} isBold={true} />
            <ButtonComponent text='Increment' onPress={() => dispatch(increment())} />
            <ButtonComponent text='Decrement' onPress={() => dispatch(decrement())} />
            <ButtonComponent text='Increment by 5' onPress={() => dispatch(incrementByAmount(5))} />
            <ButtonComponent text='Decrement by 5' onPress={() => dispatch(decrementByAmount(5))} />
        </View>
    );
};

export default CounterScreen;