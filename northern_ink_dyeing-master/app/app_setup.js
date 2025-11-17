/* 幽灵注释：Vue3 应用配置和数据 */
const { createApp, ref, onMounted, onBeforeUnmount } = Vue;

const app = createApp({
    setup() {
        // 响应式数据
        const activeSection = ref('home');
        const isMusicPlaying = ref(false);
        const musicVolume = ref(0.3);
        const bgMusic = ref(null);
        const observer = ref(null);
        
        // 数据对象
        const navigation = ref([
            { id: 'home', title: 'Home', src: 'images/logo.png'},
            { id: 'about', title: 'About', icon: 'flaticon-social' },
            { id: 'resume', title: 'Resume', icon: 'flaticon-curriculum' },
            { id: 'services', title: 'Services', icon: 'flaticon-layers-1' },
            { id: 'work', title: 'Works', icon: 'flaticon-tools' },
            { id: 'blog', title: 'Blog', icon: 'flaticon-blog' },
            { id: 'contact', title: 'Contact', icon: 'flaticon-send-mail' }
        ]);
        
        const profile = ref({
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
        });
        
        const about = ref({
            description: '劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折，莫待无花空折枝。纨绔不饿死，儒冠多误身。丈人试静听，贱子请具陈。甫昔少年日，早充观国宾。读书破万卷，下笔如有神。',
            infoList1: [
                { label: 'Name', value: 'Simon', isLink: false },
                { label: 'Gitee', value: 'https://gitee.com/northern_ink_dyeing', isLink: true }
            ],
            infoList2: [
                { label: 'Email', value: 'mainc@foxmail.com', isLink: false },
                { label: 'Freelance', value: 'Available', isLink: false }
            ]
        });
        
        const skills = ref([
            { name: 'HTML5', percentage: 75, color: '#9147ff' },
            { name: 'CSS3', percentage: 75, color: '#ff5e7e' },
            { name: 'VUE2/3', percentage: 75, color: '#ffc713' },
            { name: 'JavaScript5/6', percentage: 75, color: '#51dbc3' }
        ]);
        
        const resume = ref({
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
        });
        
        const services = ref([
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
        ]);
        
        const works = ref([
            { id: 1, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/1.jpg', colClass: 'col-md-6' },
            { id: 2, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/2.jpg', colClass: 'col-md-6' },
            { id: 3, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/3.jpg', colClass: 'col-md-6' },
            { id: 4, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/4.jpg', colClass: 'col-md-6' },
            { id: 5, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/5.jpg', colClass: 'col-sm-6' },
            { id: 6, title: 'Portfolio Item Title', category: 'Branding, Print', image: 'images/gallery/6.jpg', colClass: 'col-sm-6' }
        ]);
        
        const blogPosts = ref([
            {
                id: 1,
                title: 'Let\'s Talk About Design',
                image: 'images/resource/blog-1.jpg',
                day: '02',
                month: 'Sep',
                author: 'admin',
                category: 'Design'
            },
            {
                id: 2,
                title: 'Let\'s Talk About Design',
                image: 'images/resource/blog-2.jpg',
                day: '04',
                month: 'Sep',
                author: 'admin',
                category: 'Design'
            },
            {
                id: 3,
                title: 'Let\'s Talk About Design',
                image: 'images/resource/blog-3.jpg',
                day: '06',
                month: 'Sep',
                author: 'admin',
                category: 'Design'
            }
        ]);
        
        const contactForm = ref({
            username: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        });
        
        // 方法
        const scrollToSection = (sectionId) => {
            activeSection.value = sectionId;
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        const handleScroll = () => {
            const sections = ['home', 'about', 'resume', 'services', 'work', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && scrollPosition >= section.offsetTop) {
                    activeSection.value = sections[i];
                    break;
                }
            }
        };
        
        const submitContactForm = () => {
            if (!validateForm()) {
                return;
            }

            console.log('表单提交:', contactForm.value);
            showSuccessMessage();
            resetContactForm();
        };
        
        const validateForm = () => {
            const { username, email, subject, phone, message } = contactForm.value;

            if (!username.trim()) {
                alert('请输入您的姓名');
                return false;
            }

            if (!email.trim()) {
                alert('请输入您的邮箱');
                return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('请输入有效的邮箱地址');
                return false;
            }

            if (!subject.trim()) {
                alert('请输入主题');
                return false;
            }

            if (!phone.trim()) {
                alert('请输入您的电话');
                return false;
            }

            if (!message.trim()) {
                alert('请输入留言内容');
                return false;
            }

            return true;
        };
        
        const showSuccessMessage = () => {
            const successDiv = document.createElement('div');
            successDiv.className = 'form-success-message';
            successDiv.innerHTML = `
                <div>
                    <i class="fa fa-check-circle"></i>
                    感谢您的留言！我会尽快回复您。
                </div>
            `;

            const form = document.querySelector('.contact-form form');
            form.insertBefore(successDiv, form.firstChild);

            setTimeout(() => {
                if (successDiv.parentNode) {
                    successDiv.parentNode.removeChild(successDiv);
                }
            }, 3000);
        };
        
        const resetContactForm = () => {
            contactForm.value = {
                username: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            };
        };
        
        const initSkillCharts = () => {
            if (typeof $ !== 'undefined' && $.fn.knob && $('.dial').length > 0) {
                $('.dial').each(function () {
                    const $this = $(this);
                    if (!$this.data('knob-initialized')) {
                        $this.knob({
                            readOnly: true,
                            width: '90',
                            height: '90',
                            lineCap: 'normal',
                            fgColor: $this.data('fgcolor'),
                            bgColor: '#f5f5f5'
                        });
                        $this.data('knob-initialized', true);
                    }
                });
            }
        };
        
        const initCounters = () => {
            if (typeof $ !== 'undefined' && $.fn.animateNumber) {
                $('.count-text').each(function () {
                    const $this = $(this);
                    if (!$this.data('counter-initialized')) {
                        $this.animateNumber({
                            number: $this.data('stop'),
                            numberStep: function (now, tween) {
                                const target = $(tween.elem);
                                target.text(Math.floor(now));
                            }
                        }, 2000);
                        $this.data('counter-initialized', true);
                    }
                });
            }
        };
        
        const initScrollAnimations = () => {
            if (typeof $ !== 'undefined' && $.fn.appear) {
                $('.wow').appear();
            }
        };
        
        const initAnimations = () => {
            setTimeout(() => {
                initSkillCharts();
                initCounters();
                initScrollAnimations();
            }, 100);
        };
        
        const initMusicControl = () => {
            bgMusic.value = document.getElementById('bgMusic');
            const musicControl = document.getElementById('musicControl');
            
            if (!bgMusic.value || !musicControl) return;
            
            bgMusic.value.volume = musicVolume.value;
            
            musicControl.addEventListener('click', () => {
                toggleMusic();
            });
        };
        
        const toggleMusic = () => {
            const musicControl = document.getElementById('musicControl');
            
            if (!bgMusic.value || !musicControl) return;
            
            if (isMusicPlaying.value) {
                bgMusic.value.pause();
                musicControl.innerHTML = '<i class="fa fa-music"></i>';
                musicControl.classList.remove('playing');
            } else {
                const playPromise = bgMusic.value.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        musicControl.innerHTML = '<i class="fa fa-pause"></i>';
                        musicControl.classList.add('playing');
                    }).catch(error => {
                        console.error('音乐播放失败:', error);
                    });
                }
            }
            
            isMusicPlaying.value = !isMusicPlaying.value;
        };
        
        // 生命周期钩子
        onMounted(() => {
            initMusicControl();
            window.addEventListener('scroll', handleScroll);
            handleScroll();

            setTimeout(() => {
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.scrollIntoView({ behavior: 'instant' });
                }
            }, 100);

            initAnimations();

            observer.value = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        initSkillCharts();
                    }
                });
            });

            observer.value.observe(document.getElementById('app'), {
                childList: true,
                subtree: true
            });
            
            scrollToSection('home');
        });
        
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
            
            if (bgMusic.value) {
                bgMusic.value.pause();
            }

            if (observer.value) {
                observer.value.disconnect();
            }
        });
        
        // 返回需要在模板中使用的数据和方法
        return {
            activeSection,
            isMusicPlaying,
            musicVolume,
            navigation,
            profile,
            about,
            skills,
            resume,
            services,
            works,
            blogPosts,
            contactForm,
            scrollToSection,
            handleScroll,
            submitContactForm,
            validateForm,
            showSuccessMessage,
            resetContactForm,
            initSkillCharts,
            initCounters,
            initScrollAnimations,
            initAnimations,
            initMusicControl,
            toggleMusic
        };
    }
});

// 挂载应用
app.mount('#app');
