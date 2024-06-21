import { useState } from "react";
import Button from "../components/Button";

const CalcPage = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [ope, setOpe] = useState<string>("");
    const [dec, setDec] = useState<number>(0);
    const [ans, setAns] = useState<number>(0);
    const [cnt, setCnt] = useState<boolean>(false);

    const numberKeyPressed = (key: number) => {
        let tmp = (ope === "") ? num1 : num2;
        if(dec===0){
            tmp = tmp*10 + key;
        }else{
            tmp = tmp + key/(10**dec);
            setDec(dec+1);
        }

        if(ope === ""){
            setNum1(tmp);
        }else{
            setNum2(tmp);
        }
    }
    const opeKeyPressed = (key: string) => {
        setDec(0);
        if(key==="="){
            if(ope === "+"){
                setAns(num1 + num2);
            }else if(ope === "-"){
                setAns(num1 - num2);
            }else if(ope === "×"){
                setAns(num1 * num2);
            }else if(ope === "/"){
                if(num2!==0)setAns(num1 / num2);
            }
            setCnt(true);
            setNum1(0);
            setNum2(0);
            setOpe("");
        }
        else if(key==="AC"){
            setNum1(0);
            setNum2(0);
            setDec(0);
            setOpe("");
            setAns(0);
            setCnt(false);
        }else if(key==="ANS"){
            if(cnt && ope==="")setNum1(ans);
        }else if(key=== "×"|| key==="+" || key==="-" || key==="/"){
            setOpe(key);
        }
    }

    return (
        <div className="calc-wraper">
            <div className="calc">
                <div className="calc-title">
                    <h1>Calculator</h1>
                </div>
                <div className="calc-display">
                    { num1 }
                    { ope === "" ?
                        ""
                        :
                        ope
                    }
                    { num2 === 0 ?
                        ""
                        :
                        num2

                    }
                </div>
                <div className="calc-display-ans">
                    {"ans : "}
                    {cnt ? ans  : "-"}
                </div>
                <div className="calc-input">
                    <div className="calc-numbers">
                        {
                            [7,8,9,4,5,6,1,2,3,0].map(el=>(
                                <Button className="calc-button" handler={() => {numberKeyPressed(el)} } text={el} />
                            ))
                        }
                        {

                            <Button className="calc-button" handler={() => {opeKeyPressed("=")} } text={"="} />
                        }
                        {
                            <Button className="calc-button" handler={() => {setDec(1)} } text={"."} />
                        }
                    </div>
                    <div className="calc-operators">
                        {
                            ["none", "AC", "×", "/","+","-", "ANS","none"].map(el=>(
                                <Button className="calc-button" handler={ () => {opeKeyPressed(el)} } text={el} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalcPage;