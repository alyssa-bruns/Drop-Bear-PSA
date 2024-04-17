export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sightings').del()

  // Inserts seed entries
  await knex('sightings').insert([
    {
      id: 1,
      display_name: 'Grampians National Park, Victoria, Australia',
      lat: -37.4154116,
      lon: 142.43338307147962,
      date: '2024-04-10',
      time: '21:00',
      description:
        "The crackle of the campfire and the laughter of my friends filled the air as we sat beneath the starry outback sky. Lost in the warmth of camaraderie, I didn't notice the subtle rustle in the trees above. Suddenly, a dark shape plummeted from the canopy, landing amidst our circle with a menacing growl. My heart pounded as I scrambled to escape its grasp, the adrenaline-fueled sprint through the forest a harrowing reminder of the dangers lurking in the night.",
      is_approved: 1,
    },
    {
      id: 2,
      display_name: 'Blue Mountains National Park, New South Wales, Australia',
      lat: -33.6152,
      lon: 150.4179,
      date: '2024-04-11',
      time: '13:30',
      description:
        'Each step through the bush felt like a triumph, until a sudden thud shattered my confidence. Looking up, I was met with the chilling sight of a drop bear poised to strike. With lightning reflexes, I dodged its descent, my pulse racing as I fled through the dense undergrowth. The memory of those piercing eyes haunted me long after the encounter had passed, a stark reminder of the perilous beauty of the Australian wilderness.',
      is_approved: 1,
    },
    {
      id: 3,
      display_name: 'Daintree Rainforest, Queensland, Australia',
      lat: -16.1653032,
      lon: 145.41839146675824,
      date: '2024-04-12',
      time: '10:45',
      description:
        'Excitement coursed through me as I ventured deeper into the lush rainforest, camera in hand. But my sense of wonder was shattered by a sudden shadow overhead. Before I could react, a drop bear plummeted from the canopy, its sharp claws gleaming in the sunlight. Frozen in fear, I could only watch as it loomed over me, its hungry gaze sending chills down my spine. It was a brush with death I would never forget, a stark warning of the dangers that lurk in the untamed wilds.',
      is_approved: 1,
    },
  ])
}
