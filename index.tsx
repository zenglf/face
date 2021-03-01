/*
 * @Author: zenglingfang
 * @Date: 2021-02-25 16:18:29
 * @LastEditors: zenglingfang
 * @LastEditTime: 2021-03-01 19:21:41
 * @Description: 
 */
import React, { useState, useEffect, useMemo } from 'react';
import './style.scss';
const info =[{"title":"同城零售-ToB产品运营（猫超市卡）-用户运营部","city":"杭州-1","time":"9分钟前"},
{"title":"阿里云智能事业群-系统研发专家-机器学习平台","city":"杭州-2","time":"19分钟前"},
{"title":"中台运营事业部-品牌搜索产品运营-上海","city":"上海-3","time":"19分钟前"},
{"title":"阿里妈妈技术-前端开发专家/高级专家-北京","city":"北京-4","time":"9分钟前"},
{"title":"同城零售-渠道拓展专家-天猫超市","city":"杭州-5","time":"19分钟前"}];
function Login(props: any) {
    interface StringArray{       
    }
    const [animation, setAnimation] = useState({transition:'none'})
    const [cont, setCont] = useState(0);
    const [state, setState] = useState(true);
    const [list, setList] = useState([...info,info[0]]);
    useEffect(()=>{ 

        if(!state){return ()=>{}}
        let contos = cont;
        const animstionstop = setTimeout(()=>{
            contos++
            setCont(contos);
            let listInfo = list;
            listInfo.push(listInfo[1]);
            listInfo.shift();
            setList(listInfo);
            setAnimation(()=>{          
                return {
                    transition: 'none',
                    transform: 'translate3d(0px, 0px, 0px)'
                }
            })
            clearTimeout(animstionstop); 
        },3000); //动画停滞时间 2000
        const animstionState = setTimeout(()=>{
            setAnimation(()=>{
                return {
                    transition: 'all 900ms ease',
                    transform: 'translate3d(0px, -68px, 0px)'
                }
            })
            clearTimeout(animstionState);
        },1000); 
        return ()=>{
            clearTimeout(animstionstop);
            clearTimeout(animstionState);
        }
    },[cont,state])
    
    const setRenderView=()=>{
        return list.map((item,index)=>{
            return  (<tr className='table-row' key={index}>
                        <td className='table-cell' style={{color:'#84C1FF'}}>{item.title}</td>
                        <td className='table-cell'>{item.city}</td>
                        <td className='table-cell' style={{color:'#999',textAlign:'end'}}>{item.time}</td>
                    </tr>)
        })
    }
    return (
        <div className='hv-login'>
            <div className='login-wrap'>
                <p className='wrap-title'>最新职位<span className="title-more">更多</span></p>
                <div className='table-body' >
                    <table style={{width:'100%'}}>
                        <tbody onMouseEnter={()=>{
                           
                            setState(false)
                        }} onMouseLeave={()=>{
                            setState(true)
                        }} style={Object.assign({},{width:'100%'},animation) }>
                            {setRenderView()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Login;