<script setup>
    const team_members = [
        {
            img: require('@/assets/images/whatWeDo/aboutus/team-ceo.jpg'),
            name: 'Mrs. Yin Yin Cho',
            position: 'Founder & President',
            department: 'CEO',
            education: 'Paris Graduate School of Management and a Bachelor of Science in Physics (Q) from Mandalay University'
        }, 
        {
            img: require('@/assets/images/whatWeDo/aboutus/staff1.jpg'),
            name: 'Ms. May Han Chi',
            position: 'Sales & Marketing Director',
            department: 'Management Team',
            education: '2nd Semester -Psychology, Green River College, Auburn Campus, Washington State, United States of America.'
        },
        {
            img: require('@/assets/images/whatWeDo/aboutus/staff2.jpg'),
            name: 'Mrs. Thin Thin Hlaing',
            position: 'Human Resource and Operations Director',
            department: 'Management Team',
            education: 'Bachelor of Arts in English, Mandalay University.'
        }
    ]
</script>

<template>
    <div class="mt-32 bg-slate-200">
        <Container>
            <h3 class="text-center text-3xl text-slate-700 font-bold">Meet Our Team</h3>
            <p class="text-center mt-3 text-slate-600">87% of people learning for professional development report career benefits</p>

            <div class="grid grid-cols-3 gap-10 mt-10 w-full">
                <div class="col-span-1 p-2 rounded-2xl " v-for="(member, index) in team_members" :key="index">
                    <img class="w-[320px] h-[320px] mt-5 mx-auto rounded-2xl object-cover object-top " :src="member.img" alt="">

                    <div class="mt-5">
                        <h3 class="text-xl text-slate-700 font-bold text-center">{{ member.name }}</h3>
                        <h4 class="text-base px-10 h-10 mt-2 text-slate-500 font-bold text-center">{{ member.position }}</h4>
                        <h4 class="text-base text-slate-600 font-bold text-center mt-2">({{ member.department }})</h4>
                    </div>

                    <div class="w-[320px] h-20 mx-auto mt-5 px-3 pb-5">
                        <p class="text-sm text-slate-600 text-justify">
                            {{ member.education }}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>