<script setup>
    const infos = [
        {
            title: "Email",
            data: [
                "contact@consultelite@gmail.com",
                "info@consultelite@gmail.com",
            ],
            img: require("@/assets/images/whatWeDo/mail.png")
        },
        {
            title: "Phone",
            data: [
                "09-999-999-999",
                "09-999-999-999"
            ],
            img: require("@/assets/images/whatWeDo/phone.png")
        },
        {
            title: "Address",
            data: [
                "No. 123, Street, City, Country 12345, No. 123, Street, City, Country 12345 ",
            ],
            img: require("@/assets/images/whatWeDo/location.png")
        }
    ]
</script>
<template>
    <Container>
        <div class="flex justify-between  items-center mt-20 -mb-14">
            <div v-for="(info, index) in infos" :key="index" class="flex items-center h-[100px] bg-slate-50  py-1 px-2 shadow-2xl w-[400px] rounded-lg">
                <img class="w-20 h-20" :src="info.img" alt="">
                <div class="ms-3">
                    <h1 class="text-slate-500 mb-1">{{info.title}}</h1>
                    <p v-for="(data, index) in info.data" :key="index" class="text-slate-700 font-semibold text-sm">
                        {{data}}
                    </p>
                </div>
            </div>
        </div>
    </Container>
</template>