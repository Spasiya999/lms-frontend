// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage/HomePage.vue';
import AboutUsPage from '@/views/AboutPage/AboutUsPage.vue';
import CoursesPage from '../views/CoursesPage/CoursesPage.vue';
import ContacPage from '@/views/Contactpage/ContacPage.vue';
import FaqPageView from '@/views/FaqPage/FaqPageView.vue';
import SingleCoursePage from '@/views/CoursesPage/SingleCoursePage.vue';
import MyProfilePageView from '@/views/MyProfilePage/MyProfilePageView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about-us',
        name: 'about',
        component: AboutUsPage
    },
    {
        path: '/courses',
        name: 'courses',
        component: CoursesPage
    },
    {
        path: '/contact-us',
        name: 'contact',
        component: ContacPage
    },
    {
        path: '/faq',
        name: 'faq',
        component: FaqPageView
    },
    {
        path: '/single-course',
        name: 'single-course',
        component: SingleCoursePage
    },
    {
        path: '/my-profile',
        name: 'my-profile',
        component: MyProfilePageView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
