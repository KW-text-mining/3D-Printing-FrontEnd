import React, {MouseEvent, useRef} from 'react';
import { useSelector } from 'react-redux';
import {CardProps, CardHeader, Card } from '@mui/material';
import ReactWordcloud, { Callbacks, Word} from 'react-wordcloud';
import { RootState } from '../../../../redux/rootReducer';

type ItemProps = {
    text: string;
    value: number;
}

interface Props extends CardProps {
    title?: string;
    subheader?: string;
    words : ItemProps[];
  }

export default function TagWordCloud({ title, words, ...other } : Props) {
    
    const svgRef = useRef<SVGSVGElement>(null);
    
    const handleWordClick = (word: string, event: MouseEvent<SVGTextElement>) => {
        console.log(`wordcloud에서 클릭한 단어 ${word}`);
    }

    const callbacks: Callbacks = {
        onWordClick: (word: Word) => handleWordClick(word.text, word.event as MouseEvent<SVGTextElement>),
        getWordTooltip: (word: Word) => ` ${word.text} (${word.value})`
    };

    const buttonTitle = useSelector((state:RootState) => state.bigcatebutton);
    console.log("tagwordcloud에서 buttonTitle : ", buttonTitle);
    
    return (
        <Card {...other}>
        <CardHeader title={title} subheader={buttonTitle}/>
            <ReactWordcloud words={words} callbacks={callbacks} />
        </Card>
    )

}