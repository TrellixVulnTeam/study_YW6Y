const socialMidia = {
  youtube: 'caiquemoa',
  twitter: 'caiquemoa',
  facebook: 'caiquemoa',
  instagram: 'caiquemoa',
  github: 'caiquemoa'
}

function changeLinks() {
  //element.text.contet substitui o getElmentById("");
  for (let li of redeSocial.children) {
    social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${socialMidia[social]}`
  }
  // userName.children[1].href = `https://www.github.com/${socialMidia.github}`
}

changeLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${socialMidia.github}`

  // nome do ID.textContent =
  //ex:  userName.textContent
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.children[0].textContent = data.name
      userName.children[1].href = data.html_url
      userName.children[2].textContent = data.bio
      userName.children[1].children[1].textContent = data.login
    })
}
getGitHubProfileInfo()
