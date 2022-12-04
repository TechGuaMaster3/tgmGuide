import { defineConfig } from 'vitepress'

const sidebarJP = {
    text: '日本語',
    collapsible: true,
    items: [
        {
            text: 'TGM攻略',
            items: [
                { text: '序章　Ｊ．Ｏのテトリス講座', link: '/ja-jp/0' },
                { text: '第１章　基礎知識', link: '/ja-jp/1' },
                { text: '第２章　基本的な積み方', link: '/ja-jp/2' },
                { text: '第３章　削り', link: '/ja-jp/3' },
                { text: '第４章　復活', link: '/ja-jp/4' },
                { text: '第５章　高速落下ステージ', link: '/ja-jp/5' },
                { text: '第６章　５列目を高くする', link: '/ja-jp/6' },
                { text: '第７章　可動範囲を理解する', link: '/ja-jp/7' },
                { text: '第８章　回転入れ', link: '/ja-jp/8' },
                { text: '第９章　飛ばし・渡し', link: '/ja-jp/9' },
                { text: '第１０章　アクティブな積み方', link: '/ja-jp/10' },
                { text: '第１１章　タイムアタック', link: '/ja-jp/11' },
                { text: '第１２章　上級テクニック', link: '/ja-jp/12' },
            ],
        },
        {
            text: 'TAP攻略',
            items: [
                { text: '第１３章　マスターｍ', link: '/ja-jp/13' },
                { text: '第１４章　デスｍ', link: '/ja-jp/14' },
                { text: '第１５章　デスGm', link: '/ja-jp/15' },
                { text: '第１６章　マスターGm', link: '/ja-jp/16' },
            ],
        },
        {
            text: 'Ti攻略',
            items: [
                { text: '第１７章　新システム', link: '/ja-jp/17' },
                { text: '第１８章　シラセＬｖ１３００まで', link: '/ja-jp/18' },
                { text: '第１９章　シャドウスタッフロール', link: '/ja-jp/19' },
            ],
        },
    ],
};

const sidebarTW = {
    text: '繁體中文',
    collapsible: true,
    items: [
        {
            text: 'TGM攻略',
            collapsible: true,
            items: [
                { text: '序章　Ｊ．Ｏ的方塊講座', link: '/zh-tw/0' },
                { text: '第１章　基礎知識', link: '/zh-tw/1' },
                { text: '第２章　疊方塊的基本方法', link: '/zh-tw/2' },
                { text: '第３章　削', link: '/zh-tw/3' },
                { text: '第４章　復活', link: '/zh-tw/4' },
                { text: '第５章　高速落下關卡', link: '/zh-tw/5' },
                { text: '第６章　挑高第五行', link: '/zh-tw/6' },
                { text: '第７章　搞懂方塊的活動範圍', link: '/zh-tw/7' },
                { text: '第８章　旋轉嵌入', link: '/zh-tw/8' },
                { text: '第９章　飛渡', link: '/zh-tw/9' },
                /*
                { text: '第１０章　', link: '/zh-tw/10' },
                { text: '第１１章　', link: '/zh-tw/11' },
                { text: '第１２章　', link: '/zh-tw/12' },
                */
            ],
        },
        /*
        {
            text: 'TAP攻略',
            collapsible: true,
            items: [
                { text: '第１３章　Master模式m', link: '/zh-tw/13' },
                { text: '第１４章　Death模式m', link: '/zh-tw/14' },
                { text: '第１５章　Death模式Gm', link: '/zh-tw/15' },
                { text: '第１６章　Master模式Gm', link: '/zh-tw/16' },
            ],
        },
        {
            text: 'Ti攻略',
            collapsible: true,
            items: [
                { text: '第１７章　新系統', link: '/zh-tw/17' },
                { text: '第１８章　把Shirase玩到Lv1300', link: '/zh-tw/18' },
                { text: '第１９章　隱形字幕', link: '/zh-tw/19' },
            ],
        },
        */
    ],
};

export default defineConfig({
    base: '/tgmGuide/',
    title: 'TGM 攻略',
    description: '',
    themeConfig: {
        nav: [
            { text: '首頁', link: '/' },
        ],
        sidebar: [
            ...sidebarTW.items,
        ],
        outlineTitle: '目次',
        socialLinks: [
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
                },
                link: 'https://www.twitch.tv/tetristhegrandmaster3'
            },
            { icon: 'facebook', link: 'https://www.facebook.com/tetristhegrandmaster3/' },
        ],
    },
    markdown: {
    },
});
