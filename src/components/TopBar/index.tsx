import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons';

export const TopBarContainer = styled.div`
    position: absolute;
    z-index: 1000;
    width: 100%;
`;

export const TopBarElement = styled.div`
    position: relative;
    height: 45px;
    width: 100%;
    padding: 0 20px;
    line-height: 3px;
    z-index:210 !important;
    background-color: rgba(0,0,0,0.3);
    border-bottom: solid 1px rgba(255,255,255,0.1);
`;

export const TopNav = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const TopNavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const TopNavListElement = styled.li`
    & {
        display: inline-block;
        height: 45px;
        line-height:45px;
        font-size: 18px;
        padding: 0 10px;
        text-transform: uppercase;
        z-index:1 !important;
    }
    &:first-child {
        padding-left: 0;
    }
`;


export const TopLink = styled.a`
    display: inline-block;
    
`

export default function TopBar() {

    return(
        <TopBarElement>
            <TopNavList>
                <TopNavListElement>
                    <TopLink href="https://facebook.com/safemoonprotocol" target="_blank">
                        <FontAwesomeIcon icon={fab.faFacebook} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://twitter.com/safemoon" target="_blank">
                        <FontAwesomeIcon icon={fab.faTwitter} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://www.instagram.com/safemoonhq/" target="_blank">
                        <FontAwesomeIcon icon={fab.faInstagram} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://github.com/Safemoon-Protocol" target="_blank">
                        <FontAwesomeIcon icon={fab.faGithub} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://www.reddit.com/r/SafeMoon/" target="_blank">
                        <FontAwesomeIcon icon={fab.faReddit} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://t.me/safemoonv2" target="_blank">
                        <FontAwesomeIcon icon={fab.faTelegram} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://discord.gg/safemoon" target="_blank">
                        <FontAwesomeIcon icon={fab.faDiscord} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw" target="_blank">
                        <FontAwesomeIcon icon={fab.faYoutube} />
                    </TopLink>
                </TopNavListElement>
                <TopNavListElement>
                    <TopLink href="https://twitch.tv/safemoonprotocol" target="_blank">
                        <FontAwesomeIcon icon={fab.faTwitch} />
                    </TopLink>
                </TopNavListElement>
            </TopNavList>
        </TopBarElement>
    );

}