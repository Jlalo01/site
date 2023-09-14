import React from 'react';
import { useNavigate } from 'react-router-dom';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Info.css';

const Info = props => {
    const navigate = useNavigate();

    function handleBack(){
        props.back(false)
    }

    function handlePlay(){
        window.scrollTo(0,0);
        navigate("/play/"+props.selection.tag);
    }

    return (props.trigger) ?(
        <div className='all_info'>
            <div className='info_box_pad'>
                <div className='info_box_back' onClick={handleBack}>{"<Back"}</div>
                <div className='info_box'>
                    <div className='play_button' onClick={handlePlay}>{"Play >"}</div>
                    <Thumbnail className="info_thumb" tag={props.selection.tag} alt={props.selection.name} />
                    <div className='info_box_title'>{props.selection.name}</div>
                    <div className='info_box_info'>{props.selection.info}</div>
                    {
                        Object.keys(props.selection.specs).map(element => (
                            <div className='info_box_specs'>{element+": "+props.selection.specs[element]}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    ) : "";
}

export default Info;