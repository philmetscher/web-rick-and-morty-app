export default createCharacterCard;

function createCharacterCard(characterObject) {
  const card = document.createElement('li');
  card.classList.add('card');

  card.innerHTML = `<li class="card">
    <div class="card__image-container">
      <img
        data-js="characterImage"
        class="card__image"
        src="${characterObject.source}"
        alt="Image of ${characterObject.name}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title" data-js="characterTitle">${characterObject.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description" data-js="characterStatus">${characterObject.info.status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description" data-js="characterType">${characterObject.info.type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description" data-js="characterOccurences">${characterObject.info.occurences}</dd>
      </dl>
    </div>
  </li>`;

  return card;
}
