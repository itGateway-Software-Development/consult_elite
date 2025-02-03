<template>
    <div class="flex items-center justify-center mb-20 mt-32 " >
        <img class="w-[500px] h-[500px] object-cover object-top shadow-2xl" src="@/assets/images/whatWeDo/partner.jpg" alt="">
        <form action="" class="bg-zinc-600 p-10  w-[640px] h-[500px]  shadow-2xl " id="partner-submit-from">
            <input type="text" id="first_name" class="bg-[#e2e2d6] border border-[#e2e2d6] text-gray-900 text-sm rounded-lg focus:ring-[#e2e2d6] focus:border-[#e2e2d6]  block w-full p-2.5 mb-7 mt-10"  placeholder="Name" required />
            <input type="text" id="first_name" class="bg-[#e2e2d6] border border-[#e2e2d6] text-gray-900 text-sm rounded-lg focus:ring-[#e2e2d6] focus:border-[#e2e2d6]  block w-full p-2.5 mb-7"  placeholder="Email" required />
            <input type="text" id="first_name" class="bg-[#e2e2d6] border border-[#e2e2d6] text-gray-900 text-sm rounded-lg focus:ring-[#e2e2d6] focus:border-[#e2e2d6]  block w-full p-2.5 mb-7"  placeholder="College Name" required />
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-[#e2e2d6] rounded-lg border border-[#e2e2d6] focus:ring-[#e2e2d6] focus:border-[#e2e2d6] mb-7" placeholder="Messages..."></textarea>
            <div class="flex justify-end">
                <Button text="Submit"  />
            </div>
        </form>
    </div>
</template>