// https://randomuser.me/
const url = "https://randomuser.me/api/";

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP response error: ${response.status}`);
    }
    const data = await response.json();

    const { results } = data;
    const {
      picture: { medium: image },
      name: { first, last },
      email,
      dob: { age },
      location: {
        street: { number, name },
      },
      phone,
      login: { password },
    } = results[0];

    return {
      email,
      phone,
      image,
      password,
      name: `${first} ${last}`,
      age,
      street: `${number} ${name}`,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;
