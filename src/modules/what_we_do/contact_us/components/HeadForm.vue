<template>
    <Container>
        <div class="grid grid-cols-2 mt-3">
            <div class="col-span-1">
                <h1 class="text-secondary-500 mt-10">Contact Us</h1>
                <h1 class="text-4xl font-bold text-slate-700">Get In Touch</h1>
                <p class="mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptates placeat facere error repudiandae vel quas ratione sed fugit ullam, nemo adipisci nesciunt corporis molestiae unde reprehenderit odit officiis numquam, illum consectetur expedita rem omnis! 
                </p>
            </div>
            <div class="col-span-1">
                <form action="" class="bg-gray-50 p-10 rounded-lg w-3/4 ms-auto mt-10 shadow-2xl ">
                    <input type="text" id="first_name" class="bg-[#e2e2d6] border border-[#e2e2d6] text-gray-900 text-sm rounded-lg focus:ring-[#e2e2d6] focus:border-[#e2e2d6]  block w-full p-2.5 mb-4"  placeholder="Name" required />
                    <input type="text" id="first_name" class="bg-[#e2e2d6] border border-[#e2e2d6] text-gray-900 text-sm rounded-lg focus:ring-[#e2e2d6] focus:border-[#e2e2d6]  block w-full p-2.5 mb-4"  placeholder="Email" required />
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-[#e2e2d6] rounded-lg border border-[#e2e2d6] focus:ring-[#e2e2d6] focus:border-[#e2e2d6] mb-4" placeholder="Messages..."></textarea>
                    <div class="flex justify-end">
                        <Button text="Submit"  />
                    </div>
                </form>
            </div>
        </div>
    </Container>
</template>