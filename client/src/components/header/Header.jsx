import React from 'react';
import NavBar from './NavBar';
import { HeaderAlpha, Head, HeadInsider, HeaderIcon, Socials, Title, Face, Tweet, Insta } from './Styles';

export default function Header() {
    return (
        <HeaderAlpha>
            <Head>
                <HeadInsider>
                    <HeaderIcon size="65" />
                    <Title>Henry Autocinema</Title>
                </HeadInsider>
                <HeadInsider>
                    <Socials href="https://www.instagram.com/"><Insta size="50" /></Socials>
                    <Socials href="https://www.twitter.com/"><Tweet size="50" /></Socials>
                    <Socials href="https://www.facebook.com/"><Face size="50" /></Socials>
                </HeadInsider>
            </Head>
            <NavBar />
        </HeaderAlpha>
    )
}