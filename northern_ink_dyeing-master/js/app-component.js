/**
 * Vue 3 个人简历应用组件
 * 使用Composition API和setup语法
 */

import { ref, onMounted, onBeforeUnmount } from 'vue';

// 创建Vue应用
const { createApp } = Vue;

// 定义组件
const App = {
    setup() {
        // ==================== 响应式状态 ====================
        const activeSection = ref('home');
        const isMusicPlaying = ref(false);
        const musicVolume = ref(0.3);
        const bgMusic = ref(null);
        const musicControl = ref(null);
        const observer = ref(null);
        const scrollTimer = ref(null);

        // 联系表单
        const contactForm = ref({
            username: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });

        // ==================== 静态数据 ====================
        const navigation = [
            { id: 'home', title: 'Home', src: 'images/logo.png'},
            { id: 'about', title: 'About', icon: 'flaticon-social' },
            { id: 'resume', title: 'Resume', icon: 'flaticon-curriculum' },
            { id: 'services', title: 'Services', icon: 'flaticon-layers-1' },
            { id: 'work', title: 'Works', icon: 'flaticon-tools' },
            { id: 'blog', title: 'Blog', icon: 'flaticon-blog' },
            { id: 'contact', title: 'Contact', icon: 'flaticon-send-mail' }
        ];

        const profile = {
            name: 'Simon',
            greeting: '你好',
            titles: ['web 开发人员', 'web 设计师', '拍照者'],
            description: '劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折，莫待无花空折枝。岁月如梭逝，独留心中语。',
            avatar: 'https://foruda.gitee.com/avatar/1687183357018957729/5457408_northern_ink_dyeing_1687183356.png!avatar200',
            cvLink: 'http://sc.chinaz.com/',
            socialLinks: [
                { name: 'Blog', url: '#', icon: 'fa flaticon-blog' },
                { name: 'Gitee', url: 'https://gitee.com/northern_ink_dyeing', icon: 'fa fa-github' }
            ]
        };

        const about = {
            description: '劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折，莫待无花空折枝。纨绔不饿死，儒冠多误身。丈人试静听，贱子请具陈。甫昔少年日，早充观国宾。读书破万卷，下笔如有神。',
            infoList1: [
                { label: 'Name', value: 'Simon', isLink: false },
                { label: 'Gitee', value: 'https://gitee.com/northern_ink_dyeing', isLink: true }
            ],
            infoList2: [
                { label: 'Email', value: 'mainc@foxmail.com', isLink: false },
                { label: 'Freelance', value: 'Available', isLink: false }
            ]
        };

        const skills = [
            { name: 'HTML5', percentage: 75, color: '#9147ff' },
            { name: 'CSS3', percentage: 75, color: '#ff5e7e' },
            { name: 'VUE2/3', percentage: 75, color: '#ffc713' },
            { name: 'JavaScript5/6', percentage: 75, color: '#51dbc3' }
        ];

        const resume = {
            employment: [
                {
                    title: 'Web Design',
                    period: '2018-2020',
                    company: 'University of stuties',
                    description: '系统学习HTML、CSS、JavaScript、Mysql、NodeJs、Ajax、Vue、Angular、Bootstrap'
                },
                {
                    title: 'Web Development',
                    period: '2020-2023',
                    company: 'Company or enterprise',
                    description: '建设搭建WEB网站、APP、小程序、管理系统等，并学习使用APICloud或Hbuilder等工具开发软件'
                },
                {
                    title: 'Specialization Course',
                    period: '2023-至今',
                    company: 'Summary Review',
                    description: '可以快速复制app等的开发，分享自己的经验并作分享和交流以求更大的突破和进步'
                }
            ],
            experience: [
                {
                    title: 'WEB前端全站开发工程师',
                    period: '2022-Present',
                    company: '银商融信',
                    description: '负责开发和维护日常代码更新'
                },
                {
                    title: '前端开发工程师',
                    period: '2021-2022',
                    company: '哈彼树有限公司',
                    description: '负责项目研发讨论，其他需保密'
                },
                {
                    title: '前端开发工程师',
                    period: '2020-2021',
                    company: '雀科科技有限公司',
                    description: '负责前端开发和维护，其他需保密'
                }
            ]
        };

        const services = [
            {
                title: 'UI/UX Design',
                description: 'Lorem ipsum dolor amet constur adipisicing elit',
                icon: 'icon flaticon-pen-tool'
            },
            {
                title: 'Web Design',
                description: 'Lorem ipsum dolor amet constur adipisicing elit',
                icon: 'icon flaticon-folder'
            },
            {
                title: 'Branding',
                description: 'Lorem ipsum dolor amet constur adipisicing elit',
                icon: 'icon flaticon-computer'
            },
            {
                title: 'Logo Design',
                description: 'Lorem ipsum dolor amet constur adipisicing elit',
                icon: 'icon flaticon-layers-1'
            },
            {
                title: 'Apps Design',
                description: 'Lorem ipsum dolor amet constur adipisicing elit',
                icon: 'icon flaticon-web-design'
            },
            {
                title: 'Photography',
                description: 'Lorem ipsum dolor amet constur adipisicing elit',
                icon: 'icon flaticon-photo-camera'
            }
        ];

        const works = [
            { id: 1, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/1.jpg', colClass: 'col-md-6' },
            { id: 2, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/2.jpg', colClass: 'col-md-6' },
            { id: 3, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/3.jpg', colClass: 'col-md-6' },
            { id: 4, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/4.jpg', colClass: 'col-md-6' },
            { id: 5, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/5.jpg', colClass: 'col-sm-6' },
            { id: 6, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/6.jpg', colClass: 'col-sm-6' }
        ];

        const blogPosts = [
            {
                id: 1,
                title: "Let's Talk About Design",
                image: 'images/resource/blog-1.jpg',
                day: '02',
                month: 'Sep',
                author: 'admin',
                category: 'Design'
            },
            {
                id: 2,
                title: "Let's Talk About Design",
                image: 'images/resource/blog-2.jpg',
                day: '04',
                month: 'Sep',
                author: 'admin',
                category: 'Design'
            },
            {
                id: 3,
                title: "Let's Talk About Design",
                image: 'images/resource/blog-3.jpg',
                day: '06',
                month: 'Sep',
                author: 'admin',
                category: 'Design'
            }
        ];

        // ==================== 工具函数 ====================
        /**
         * 滚动到指定部分
         * @param {string} sectionId - 要滚动到的部分ID
         */
        const scrollToSection = (sectionId) => {
            activeSection.value = sectionId;
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        };

        /**
         * 优化的滚动处理函数（节流）
         */
        const handleScroll = () => {
            // 使用节流减少性能开销
            if (scrollTimer.value) return;

            scrollTimer.value = setTimeout(() => {
                const sections = ['home', 'about', 'resume', 'services', 'work', 'blog', 'contact'];
                const scrollPosition = window.scrollY + 100;

                for (let i = sections.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sections[i]);
                    if (section && scrollPosition >= section.offsetTop) {
                        activeSection.value = sections[i];
                        break;
                    }
                }
                scrollTimer.value = null;
            }, 16); // 约60fps
        };

        /**
         * 提交联系表单
         */
        const submitContactForm = () => {
            if (!validateForm()) return;

            console.log('表单提交:', contactForm.value);
            showSuccessMessage();
            resetContactForm();
        };

        /**
         * 验证表单输入
         * @returns {boolean} 表单是否有效
         */
        const validateForm = () => {
            const { username, email, subject, phone, message } = contactForm.value;

            // 使用可选链操作符和提前返回优化代码
            if (!username?.trim()) {
                alert('请输入您的姓名');
                return false;
            }

            if (!email?.trim()) {
                alert('请输入您的邮箱');
                return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('请输入有效的邮箱地址');
                return false;
            }

            if (!subject?.trim()) {
                alert('请输入主题');
                return false;
            }

            if (!phone?.trim()) {
                alert('请输入您的电话');
                return false;
            }

            if (!message?.trim()) {
                alert('请输入留言内容');
                return false;
            }

            return true;
        };

        /**
         * 显示成功提交消息
         */
        const successMessageTemplate = `
            <div class="form-success-message">
                <div>
                    <i class="fa fa-check-circle"></i>
                    感谢您的留言！我会尽快回复您。
                </div>
            </div>
        `;

        const showSuccessMessage = () => {
            const form = document.querySelector('.contact-form form');
            if (!form) return;

            const successDiv = document.createElement('div');
            successDiv.innerHTML = successMessageTemplate;
            form.insertBefore(successDiv, form.firstChild);

            setTimeout(() => {
                successDiv.parentNode?.removeChild(successDiv);
            }, 3000);
        };

        /**
         * 重置联系表单
         */
        const resetContactForm = () => {
            contactForm.value = {
                username: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            };
        };

        // ==================== 初始化函数 ====================
        /**
         * 初始化技能图表
         */
        const initSkillCharts = () => {
            // 添加检查确保jQuery和插件已加载
            if (typeof $ === 'undefined' || !$.fn.knob || !$('.dial').length) return;

            $('.dial').each(function () {
                const $this = $(this);
                // 防止重复初始化
                if ($this.data('knob-initialized')) return;

                $this.knob({
                    readOnly: true,
                    width: '90',
                    height: '90',
                    lineCap: 'normal',
                    fgColor: $this.data('fgcolor'),
                    bgColor: '#f5f5f5'
                });
                $this.data('knob-initialized', true);
            });
        };

        /**
         * 初始化计数器动画
         */
        const initCounters = () => {
            if (typeof $ === 'undefined' || !$.fn.animateNumber) return;

            $('.count-text').each(function () {
                const $this = $(this);
                // 防止重复初始化
                if ($this.data('counter-initialized')) return;

                $this.animateNumber({
                    number: $this.data('stop'),
                    numberStep: (now) => Math.floor(now)
                }, 2000);
                $this.data('counter-initialized', true);
            });
        };

        /**
         * 初始化滚动动画
         */
        const initScrollAnimations = () => {
            if (typeof $ === 'undefined' || !$.fn.appear) return;
            $('.wow').appear();
        };

        /**
         * 合并所有动画初始化
         */
        const initAnimations = () => {
            setTimeout(() => {
                initSkillCharts();
                initCounters();
                initScrollAnimations();
            }, 100);
        };

        /**
         * 初始化音乐控制
         */
        const initMusicControl = () => {
            bgMusic.value = document.getElementById('bgMusic');
            musicControl.value = document.getElementById('musicControl');

            if (!bgMusic.value || !musicControl.value) return;

            bgMusic.value.volume = musicVolume.value;
            musicControl.value.addEventListener('click', toggleMusic);
        };

        /**
         * 切换音乐播放状态
         */
        const toggleMusic = () => {
            if (!bgMusic.value || !musicControl.value) return;

            if (isMusicPlaying.value) {
                bgMusic.value.pause();
                musicControl.value.innerHTML = '<i class="fa fa-music"></i>';
                musicControl.value.classList.remove('playing');
            } else {
                bgMusic.value.play().then(() => {
                    musicControl.value.innerHTML = '<i class="fa fa-pause"></i>';
                    musicControl.value.classList.add('playing');
                }).catch(error => {
                    console.error('音乐播放失败:', error);
                });
            }

            isMusicPlaying.value = !isMusicPlaying.value;
        };

        // ==================== 生命周期钩子 ====================
        onMounted(() => {
            // 初始化音乐控制
            initMusicControl();

            // 添加滚动监听（使用passive提高性能）
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();

            // 确保页面进入时显示首页内容
            setTimeout(() => {
                document.getElementById('home')?.scrollIntoView({ behavior: 'instant' });
            }, 100);

            // 初始化动画
            initAnimations();

            // 设置DOM观察器（优化配置）
            observer.value = new MutationObserver(() => initSkillCharts());
            observer.value.observe(document.getElementById('app'), {
                childList: true,
                subtree: true,
                attributes: false,
                characterData: false
            });

            scrollToSection('home');
        });

        onBeforeUnmount(() => {
            // 移除事件监听
            window.removeEventListener('scroll', handleScroll);

            // 清理音乐
            if (bgMusic.value) {
                bgMusic.value.pause();
            }

            // 断开观察器
            if (observer.value) {
                observer.value.disconnect();
            }

            // 清理定时器
            if (scrollTimer.value) {
                clearTimeout(scrollTimer.value);
                scrollTimer.value = null;
            }
        });

        // 返回所有需要在模板中使用的变量和方法
        return {
            // 状态
            activeSection,
            isMusicPlaying,
            contactForm,

            // 数据
            navigation,
            profile,
            about,
            skills,
            resume,
            services,
            works,
            blogPosts,

            // 方法
            scrollToSection,
            submitContactForm,
            toggleMusic
        };
    }
};

// 挂载应用
createApp(App).mount('#app');
