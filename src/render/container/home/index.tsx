/**
 * @format
 * @Author: Alvin
 * @Date 2020-03-02
 * @Last modified by: Alvin
 * @Last modified time: 2020-03-02
 */

import React from "react";
import {Content, HomeContainer, Item, ItemContent, ItemImg, ItemTag, SubTitle, Title} from "./home.style";
import FP from "./static/Fp.png";
import JS from "./static/JS.png";
import CSS from "./static/CSS.png";
import REACT from "./static/REACT.png";

const Home = () => (<HomeContainer>
    <Content>
        <div>
            <Title />
            <SubTitle>Short code snippets for development needs</SubTitle>

                <ItemContent>
                {
                    [
                        {imgSrc: JS, tag: 'JavaScript'},
                        {imgSrc: FP, tag: 'Functional'},
                        {imgSrc: CSS, tag: 'CSS'},
                        {imgSrc: REACT, tag: 'React'}
                    ].map((v) => (
                        <Item>
                            <ItemImg imgSrc={v.imgSrc} />
                            <ItemTag>{v.tag}</ItemTag>
                        </Item>
                    ))
                }
                </ItemContent>

        </div>
    </Content>
</HomeContainer>);

export default Home;