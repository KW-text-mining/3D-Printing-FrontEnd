import axios from 'axios';
import { useEffect, useState, MouseEvent } from 'react';
import {CardProps, CardHeader, Card } from '@mui/material';
import ReactWordcloud, { Callbacks, Word } from 'react-wordcloud';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { changeButtonWord } from '../../../../redux/slices/wordcloudbutton';
import { RootState } from '../../../../redux/rootReducer';
// components
import Progressbar from '../../../../pages/dashboard/Progressbar';

type ItemProps = {
    text: string;
    value: number;
}

interface Props extends CardProps {
    title?: string;
    subheader?: string;
  }

export default function TagWordCloud({ title, ...other } : Props) {
    
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true);

    const handleWordClick = (word: string, event: MouseEvent<SVGTextElement>) => {
        console.log(`wordcloud에서 클릭한 단어 ${word}`);
        dispatch(changeButtonWord(word));
    }

    const callbacks: Callbacks = {
        onWordClick: (word: Word) => handleWordClick(word.text, word.event as MouseEvent<SVGTextElement>),
        getWordTooltip: (word: Word) => ` ${word.text} (${word.value})`
    };

    const buttonTitle = useSelector((state:RootState) => state.bigcatebutton);
    const date = useSelector((state:RootState) => state.startenddate);
    const start = JSON.stringify(date).slice(1,11)
    const end = JSON.stringify(date).slice(11,21)
    const [wordcloud, setWordCloud] = useState([]);

    useEffect(()=>{
        setLoading(true);
    },[buttonTitle])

     // api 호출
    useEffect(() => {
    const fetchDatas = async () => {
        const response = await axios.get(
          `http://35.73.182.58:8080/data/test?startDate=${start}&endDate=${end}&category=${buttonTitle}`
        );
        setWordCloud(response.data.topics);
        setLoading(false);
    };
    fetchDatas();
  }, [buttonTitle]);

  console.log("topics API 호출 : ",wordcloud)

    return (
        <Card {...other}>
        <CardHeader title={title} subheader={buttonTitle}/>
        {loading ? <Progressbar/> : 
            <ReactWordcloud words={wordcloud} callbacks={callbacks} />
        }
            </Card>
    )

}