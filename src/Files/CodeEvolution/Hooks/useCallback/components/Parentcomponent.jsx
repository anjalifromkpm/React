import React,{useState,useCallback} from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

const Parentcomponent = () => {
    const [age,setage] = useState(25);
    const [salary,setsalary] = useState(50000);

    const incrementAge = useCallback(()=>{
        setage(age+1)
    },[age])

    const incrementSalary = useCallback(()=>{
        setsalary(salary+1000)
    },[salary])
  return (<>
    <Title />
    <Count text='Age' count={age}/>
    <Button handleClick={incrementAge}>Increment Age</Button>
    <Count text='Salary' count={salary}/>
    <Button handleClick={incrementSalary}>Increment Salary</Button>
  </>)
}

export default Parentcomponent;