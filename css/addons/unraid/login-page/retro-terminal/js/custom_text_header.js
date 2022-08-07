
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
  ______                    ____           __    __         
 /_  __/   __  __          / __ \  ____   / /_  / /_   _____
  / /     / / / /         / /_/ / / __ \ / __/ / __/  / ___/
 / /     / /_/ /         / ____/ / /_/ // /_  / /_   (__  ) 
/_/      \__, /         /_/      \____/ \__/  \__/  /____/  
        /____/
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
