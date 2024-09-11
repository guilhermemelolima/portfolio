const repositories = document.querySelector(".containt-projects");
const repos =["desafio-poo-dio", "javascript", "php", "postgresql", "dart", "java", "dio-introducao-ao-git-e-github", "guilhermemelolima"]

function getApiGitHub(){
    
    fetch("https://api.github.com/users/guilhermemelolima/repos")
    .then(async response => {
        if(!response.ok){
            throw new Error(response.status)
        }
        const data = await response.json()
        data.map(item => {
            let project = document.createElement("div");
            if (!repos.includes(item.name)) {
                
                project.innerHTML = `
                <div class="project">
                    <h4 class="title">${item.name}</h4>
                    <div>
                        <a href="${item.html_url}" target="_blanck">
                        <img src="img/github.svg" alt="GitHub" class="icon">
                        GitHub
                        </a>
                        <span class="language">
                            <span class="circle "></span>${item.language}
                        </span>
                    </div>
                </div>
                `
                repositories.appendChild(project);
            }
        })
    })
}


//https://api.github.com/repos/guilhermemelolima/api-de-vendas
getApiGitHub()