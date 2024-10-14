export default function ConfirmationDelete(){
    return(
        <div class="bg-green-500 py-2 px-4 rounded-md text-white text-center fixed bottom-16 right-4 flex gap-4">
            <p>Success! Your changes have been saved.</p>
            <span class="cursor-pointer font-bold" onclick="return this.parentNode.remove()"><sup>X</sup></span>
        </div>
    );
}