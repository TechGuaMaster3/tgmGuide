---
title: 首頁
---

# {{ $frontmatter.title }}

## 翻譯來源

此攻略翻譯自[Ｊ．Ｏのテトリス講座](https://web.archive.org/web/20200205180348/http://www13.plala.or.jp/TETRiS_TGM/kouza/index.htm)

## 參與成員

<VPTeamMembers size="small" :members="members" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/16148bea-d47a-4868-acce-2e5a9c99434a-profile_image-70x70.png',
    name: '彩學',
    title: '翻譯',
    links: [
        {
            icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
            },
            link: 'https://www.twitch.tv/tetristhegrandmaster3'
        },
        { icon: 'facebook', link: 'https://www.facebook.com/tetristhegrandmaster3/' },
    ]
  },
  {
    avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/0989a030-8519-40d0-9810-4e9f8b4106a6-profile_image-70x70.png',
    name: '里斯',
    title: '技術支援',
    links: [
        {
            icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
            },
            link: 'https://www.twitch.tv/chris38c28'
        },
    ]
  },
]
</script>
