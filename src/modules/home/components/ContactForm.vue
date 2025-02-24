<script setup>
import WomanPic from "@/assets/images/mainPage/woman.jpg";
</script>

<template>
  <section class="bg-default-100 py-16 mb-20 rounded-[4rem]">
    <Container>
      <div class="grid grid-cols-5 gap-5">
        <div class="col-span-3">
            <form>
                <div class="mb-10">
                    <h2 class="text-3xl font-bold mb-3"><span class="text-[#ee4723]">Consult Elite</span> can help you</h2>
                    <p>
                        Enter your details and get a free counselling session with our experts so they can connect you to the right course, country, university – and even scholarships!
                    </p>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >First name</label
                    >
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="last_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Last name</label
                    >
                    <input
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="company"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Email</label
                    >
                    <input
                      type="text"
                      id="company"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="eg@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Phone number</label
                    >
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                  <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your prefered study destination</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="visitors"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Course</label
                    >
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">When do you plan to study?</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="jan">Janaury</option>
                        <option value="feb">February</option>
                        <option value="mar">March</option>
                        <option value="apr">April</option>
                        <option value="may">May</option>
                        <option value="jun">June</option>
                        <option value="jul">July</option>
                        <option value="aug">August</option>
                        <option value="sep">September</option>
                        <option value="oct">October</option>
                        <option value="nov">November</option>
                        <option value="dec">December</option>
                    </select>
                  </div>
                  <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your preferred year?</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-default-500 focus:border-default-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="jan">2024</option>
                        <option value="feb">2025</option>
                        <option value="mar">2026</option>
                    </select>
                  </div>
                </div>
                
                <Button class="mt-5" text="Submit" />
            </form>
        </div>
        <div class="col-span-2">
            <div class="image flex justify-end">
                <img class="rounded-lg h-[600px]" :src="WomanPic" alt="woman">
            </div>
        </div>
      </div>
    </Container>
  </section>
</template>
