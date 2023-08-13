import React from "react";

const addGoal = () => {
  const input =
    "block py-2.5 px-0 w-full text-sm font-inter text-secondary bg-black border-0 border-b-2 border-green-500 appearance-none focus:outline-none focus:ring-0 focus:border-green-100 peer";
  const label =
    "peer-focus:font-medium bg-black font-inter absolute text-xs  duration-300 transform top-3 -z-10 origin-[0] left-0 text-secondary scale-75 -translate-y-8";
  return (
    <div>
      <form>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Monday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" className={label}>
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Tuesday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" class={label}>
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Wednesday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" class={label}>
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Thursday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" class={label}>
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Friday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" class={label}>
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Saturday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" class={label}>
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-6 col-span-2 bg-transparent group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_first_name" class={label}>
              Sunday
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 col-span-1 bg-transparent group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class={input}
              placeholder=" "
              required
            />
            <label for="floating_last_name" class={label}>
              Time
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default addGoal;
