<template>
    <div class="pt-14 bg-slate-200">
        <Container>
            <div class="grid grid-cols-2">
                <div class="col-span-1">
                    <h1 class="text-4xl font-semibold text-slate-700 mb-6">Visit our office!</h1>
                    <p class="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos deserunt itaque. Quisquam necessitatibus, fugiat perspiciatis maiores eligendi beatae voluptatum neque distinctio quos dicta ratione 
                    </p>
                    <a href="https://maps.app.goo.gl/svvnkHX5h7nDy9bDA" target="_blank">
                        <ButtonOutline text="Get Directions" className="bg-transparent" />
                    </a>
                </div>
                <div class="col-span-1">
                    <div class="w-1/2 me-[100px] ms-auto bg-[#093633] p-5 rounded-lg shadow-2xl flex flex-col">
                        <p class="mx-auto text-white rounded-full font-bold text-xs px-3 py-1 bg-default-500 -mt-8">HOURS</p>
                        <div class="flex flex-col items-center mb-7 mt-5">
                            <h1 class="text-gray-50 font-bold">Monday - Friday</h1>
                            <p class="text-gray-200 text-xs mt-2">09:00 AM - 05:00 PM</p>
                        </div>
                        <div class="flex flex-col items-center mb-7">
                            <h1 class="text-gray-50 font-bold">Saturday</h1>
                            <p class="text-gray-200 text-xs mt-2">11:00 AM - 05:00 PM</p>
                        </div>
                        <div class="flex flex-col items-center mb-7">
                            <h1 class="text-gray-50 font-bold">Sunday</h1>
                            <p class="text-gray-200 text-xs mt-2">09:00 AM - 03:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>