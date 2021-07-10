'use strict'
const {db} = require('../server/db/index')
const Category = require('../server/db/models/Category')
const Resources = require("../server/db/models/Resources")


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')
  const categoryArr = [
    {
      name: 'AAPI Fundraisers'
    },
    {
      name: 'AAPI Organizations'
    },
    {
      name: 'Health and Wellbeing'
    },
    {
      name: `Learning About the  AAPI Community`
    },
    {
      name: 'AAPI Film and Literature'
    },
    {
      name: 'Additional Resources'
    }
  ]
  const category = await Category.bulkCreate(categoryArr)
  console.log("Seeded categories!!")
  const resourcesArr = [
    { name:'#AsianIsHuman',
      city: 'Vancouver',
      country: 'Canada',
      description: 'This verified GoFundMe page is dedicated to supporting various charities, foundations, families/individuals of the Asian community in Vancouver, BC.',
      url: 'https://www.gofundme.com/f/asian-is-community-family-human',
      imgUrl: 'https://images.gofundme.com/pDsvmvkAFNShHMAKLFDPlWIOuLo=/720x405/https://d2g8igdw686xgo.cloudfront.net/55774664_1620160322219229_r.jpeg'
    }, {
      name:'Help Karmina Raise Awareness for Asians',
      city: 'Burnaby',
      country: 'Canada',
      description: 'A verified GoFundMe campaign that funds a paid social media campaign to inform and drive traffic to Born Chinese, which aims to connect and inspire Chinese Canadians and Americans through helpful and educational content.',
      url: 'https://www.gofundme.com/f/help-karmina-raise-awareness-for-asian-hate-crimes',
      imgUrl: 'https://d2g8igdw686xgo.cloudfront.net/54909964_1616208745182175_r.jpeg',
    },
    {
      name: 'Safe Rides for the Asian Community',
      city: 'North York',
      country: 'Canada',
      description: `Let's rise up and unite to help support the Asian/Pacific Islander community get around safe when they need to travel within their city for essential purposes!`,
      url: 'https://www.gofundme.com/f/bws4pa-safe-rides-for-the-asian-community',
      imgUrl: 'https://d2g8igdw686xgo.cloudfront.net/56126852_1618598758250643_r.jpeg',
    },
    {
      name: 'Stop Asian Hate: Support Asian Canadians Fund',
      country: 'Canada',
      description: `It’s time for Canada to act. Join the #StopAsianHate movement to help end the pandemic of racism in Canada.`,
      url: 'https://www.gofundme.com/f/stop-asian-hate-support-asian-canadians-fund',
      imgUrl: 'https://d2g8igdw686xgo.cloudfront.net/57329841_1622572249317129_r.jpeg',
    },
    {
      name: 'Butterfly Asian and Migrant Sex Worker Support Network',
      country: 'Canada',
      description: `Butterfly was formed by sex workers, social workers, legal and health professionals. It provides support to, and advocates for, the rights of Asian and migrant sex workers.`,
      url: 'https://www.butterflysw.org/',
      imgUrl: 'https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.6435-9/155912289_1096197777459035_6511335826184929744_n.png?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=MOs_uQMeup0AX9ic8nN&_nc_ht=scontent.fcxh2-1.fna&oh=0434abfede28bd21a6dad1f7d17dfa04&oe=60DC3721',
    },
    {
      name: 'Council of Agencies Serving South Asians',
      country: 'Canada',
      description: 'CASSA is an umbrella organization that supports and advocates on behalf of existing as well as emerging South Asian agencies, groups, and communities in order to address their diverse and dynamic needs. CASSA’s goal is to empower the South Asian Community. CASSA is committed to the elimination of all forms of discrimination from Canadian society.',
      url: 'http://cassa.on.ca/',
      imgUrl: 'https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.6435-9/156368073_4110566358967677_2609016045674679395_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=fYut-GLgcAkAX8jd2W7&tn=Ym9elTnQOIitZ0-l&_nc_ht=scontent.fcxh2-1.fna&oh=52f9eeffb521a02512edac0995a5fbe7&oe=60DC6C39',
    },
    {
      name: 'Anakbayan Canada' ,
      country: 'Canada',
      description: 'Anakbayan is the comprehensive National Democratic organization of Filipino youth and students in Canada.',
      url: 'https://anakbayancanada.wordpress.com/',
      imgUrl: 'https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.6435-9/84019492_3500620989979472_5676429860172464128_n.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eBkPPcsEk0UAX8MJ6zh&_nc_ht=scontent.fcxh2-1.fna&oh=19a12b7d65b2396fbcd20c49e3012b42&oe=60DBF136',
    },
    {
      name: 'Arirang Age Friendly Community Centre/Rose of Sharon Care Home',
      country: 'Canada',
      description:`Arirang Age Friendly Community Centre (“AAFCC”) is a non-profit organization founded in 2013 to address the growing number of Korean seniors in the GTA with language and/or cultural barriers to community and healthcare services.`,
      url: 'https://aafcc.ca/',
    },
    {
      name: 'Fight COVID-19 Racism',
      country: 'Canada',
      description: `With anti-Asian racism on the rise across Canada, this platform aims to allow individuals to share their experiences of racism, and allows them to track and record instances of Anti-Asian racism during COVID-19.`,
      url: 'https://www.covidracism.ca/',
    },
    {
      name: 'Act 2 End Racism',
      country: 'North America',
      description: 'This Covid-19 Racism Incident Reporting Center allows those who have experienced or witnessed racism to report it. The data collected will help identify trends (new and recurring) and will be used to inform policy, service and future anti-racism initiatives.',
      url: 'https://act2endracism.ca/',
    },
    {
      name: 'Cold Tea Collective',
      country: 'North America',
      description: `Cold Tea Collective is a new media platform, sharing the real stories, perspectives, and experiences of North American Asian millennials.`,
      url:'https://coldteacollective.com/',
      imgUrl: 'https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.18169-9/20294013_727624320730120_2312890005935328761_n.png?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=oOjGjIBP-ecAX8nYTxm&_nc_ht=scontent.fcxh2-1.fna&oh=1570b9b55689d51ba6c0b30bdabc6ca0&oe=60DC04BF',
    },
    {
      name:'#Elimin8Hate',
      country:'North America',
      description: `Elimin8Hate (E8) is the advocacy arm of the Vancouver Asian Film Festival and strives to interrupt, dismantle and eliminate anti-Asian racism at the individual, institutional and systemic level by providing anti-Asian racism learning opportunities, and creating safe and inclusive ways to participate in initiatives aimed at disrupting oppressive systems and attitudes.`,
      url: 'https://www.elimin8hate.org/resources',
      imgUrl: 'https://scontent.fcxh2-1.fna.fbcdn.net/v/t1.6435-9/202764393_339413144425301_8660636973327576640_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=qaI5Hn6TABAAX-I1qEX&_nc_ht=scontent.fcxh2-1.fna&oh=9b8ca63fb7ecffbf338c150df98abe3b&oe=60DD0B7C',
    },
    {
      name: 'Hate is a Virus',
      country: 'North America',
      description: 'Hate Is A Virus is a nonprofit community of mobilizers and amplifiers to dismantle racism and hate.',
      url: 'https://hateisavirus.org/',
    },
    {
      name: 'Stop AAPI Hate',
      country: 'North America',
      description: 'This platform allows those part of Asian American Pacific Islander communities to report hate incidents.',
      url: 'https://stopaapihate.org/',
    },
    {
      name: 'Red Canary Song',
      country: 'USA',
      description: 'The only grassroots Chinese massage parlor worker coalition in the U.S. who also organize transnationally with Asian sex workers across the diaspora in Toronto, Paris, and Hong Kong.',
      url: 'https://www.redcanarysong.net/',
    },
    {
      name: 'Asian Mental Health Collective',
      description: 'Building a community for Asian mental health support.',
      url: 'https://www.asianmhc.org/',
    },
    {
      name: 'Asian American Suicide Prevention',
      description: 'The Asian American Suicide Prevention & Education is a joint project of Asian American Federation and Hamilton-Madison House.',
      url: 'https://aaspe.net/index.html',
    },
    {
      name: 'Selected Patient Information in Asian Languages (SPIRAL)',
      description: 'SPIRAL aims to increase access to Asian-language health information for consumers and health care providers. The SPIRAL web site is a collection of links to Asian-language patient care documents that have been created by authoritative sources and are freely available on the World Wide Web.',
      url: 'http://spiral.tufts.edu/web.shtml',
    },
    {
      name: 'Special Service for Groups (SSG)',
      description: 'SSG specializes in trauma-informed approaches to treatment and in serving individuals from underserved ethnic minority communities including immigrants and those with limited English skills.',
      url: 'https://www.ssg.org/what-we-do/behavioral-health/',
    },
    {
      name: 'Crisis Text Line: Dealing with COVID-19',
      description: 'Anxious about coronavirus? Reach out to a Crisis Counselor.',
      url: 'https://www.crisistextline.org/topics/get-help-coronavirus/?gclid=EAIaIQobChMI94ma_oHj7gIVxhmtBh1NqA8REAAYAiAAEgIjAvD_BwE#dealing-with-coronavirus-1',
    },
    {
      name: 'Mental Health Resources for Young People of Colour',
      description: `This "Mental Health Resources for Young People of Color" website includes organizations, digital resources and videos, support groups, and therapy directories to help support the mental health of young people of colour. This resource also provides a list of instagram accounts of mental health educators, therapists of color, and community support pages. `,
      url: 'https://onlinecounselingprograms.com/resources/mental-health-resources-students-of-color/',
    },
    {
      name: 'The National Asian American Pacific Islander Mental Health Association ',
      description: 'NAAPIMHA is a resource provider for mental health services for Asian Americans, Pacific Islanders, and Native Hawaiians. The organization provides a resource list of state-level programs designed to meet AAPI-community mental health needs.',
      url: 'https://www.naapimha.org/aanhpi-service-providers',
    },
    {
      name: 'National Queer Asian Pacific Islander Alliance ',
      description: 'The NGAPIA brings together LGBT Asian American, South Asian, Southeast Asian, and Pacific Islander (AAPI) organizations.',
      url: 'https://www.nqapia.org/wpp/',
    },
    {
      name: 'Asian Americans: A free documentary series available on PBS',
      description: 'Asian Americans is a five-hour film series that will chronicle the contributions, and challenges of Asian Americans, the fastest-growing ethnic group in America. Personal histories and new academic research will cast a fresh lens on U.S. history and the role Asian Americans have played in it.Asian Americans is a five-hour film series that will chronicle the contributions, and challenges of Asian Americans, the fastest-growing ethnic group in America. Personal histories and new academic research will cast a fresh lens on U.S. history and the role Asian Americans have played in it.',
      url: 'https://www.pbs.org/show/asian-americans/',
    },
    {
      name: 'Hollaback! Bystander Intervention Training',
      description: 'Free Bystander Intervention training to stop anti-Asian/American and xenophobic harassment in the wake of the coronavirus',
      url: 'https://www.ihollaback.org/bystanderintervention/',
    }, 
    {
      name: 'Hollaback! Guide on Bystander Intervention',
      url: 'https://www.ihollaback.org/app/uploads/2016/11/Show-Up_CUPxHollaback.pdf',
    },
    {
      name: 'Asian American Racial Justice Toolkit',
      description: 'This toolkit reflects analysis of the interconnectedness of issues and constituencies within the structures of white supremacy',
      url: `https://www.asianamtoolkit.org/the-toolkit`,
    },
    {
      name: 'Minari',
      description: 'A Korean American family moves to an Arkansas farm in search of its own American dream. Amidst the challenges of this new life in the strange and rugged Ozarks, they discover the undeniable resilience of family and what really makes a home.',
      url: 'https://a24films.com/films/minari',
    },
    {
      name: 'The Namesake',
      description: 'Ashima and Ashoke, immigrant Bengali parents, try to adjust to life in America, while Gogol, their son, tries to find his identity and choose between the two worlds.',
      url: 'https://www.amazon.com/Namesake-Irfan-Khan/dp/B001023N1A',
    },
    {
      name: 'The Farewell',
      description: `A Chinese family learns that their grandmother has less time to live so they organise a wedding before her death. However, Billi is unhappy with the family's decision.`,
      url: 'https://a24films.com/films/the-farewell',
    }, 
    {
      name: 'Black and Asian American Feminist Solidarities: A Reading List',
      description: `While there are well-documented tensions between Black and Asian-American communities, there is an equally long history of Black and Asian solidarities and community building both in the United States and abroad. How can Asian-American feminists and Black feminists engage in a critical dialogue on the impacts of COVID-19 in their respective communities? What can we learn from the long history of solidarity between Black and Asian-American feminists? More importantly, how can we continue to create transnational Black and Asian feminist solidarities in the United States and beyond?`,
      url: 'https://www.blackwomenradicals.com/blog-feed/black-and-asian-feminist-solidarities-a-reading-list?fbclid=IwAR3PBDVMih-39YQqTvtPBxksXqCmlUl1TxLP2-0lApLzPFwfFtgBST4OA0U',
    },
    {
      name: 'Resources for Asian Diaspora in Canada',
      description: 'This website highlights anti-Asian violence resources that have been gathered to help individuals educate others, take action, donate, and more.',
      url: 'https://docs.google.com/document/d/1Y_gDT-Rygpt438EGRCyBlNkQ8CLIG-t_hUfz1qhDHek/edit#heading=h.jywsrcun5v2k',

    },
    {
      name: 'Asian American Support Resources',
      url: 'https://docs.google.com/document/d/1DKLjh26g5vkuCVDnLeS5X4ElgT7Q1uT8ihlqQefP-no/edit#',
    }, 
    {
      name: `Self Evident: Asian American's Stories`,
      description: 'A podcast that aims to challenge assumptions about Asian Americans',
      url: 'https://selfevidentshow.com/',
    },
    {
      name: 'Stop AAPI Linktree',
      country: 'North America',
      url: 'https://linktr.ee/stop.asian.hate'
    },
    {
      name: 'Anti-Asian Violence Resources',
      country: 'North America',
      url: 'https://anti-asianviolenceresources.carrd.co/',
    }
  ]
  const resources = await Resources.bulkCreate(resourcesArr)
  console.log('Resources seeded successfully!')
  await category[0].setResources(resources.slice(0, 4)) // fundraisers
  await category[1].setResources(resources.slice(4, 15)) //orgs
  await category[2].setResources(resources.slice(15, 23)) // mental health
  await category[3].setResources(resources.slice(23, 27)) //education
  await category[4].setResources(resources.slice(27, 31)) //film
  await category[5].setResources(resources.slice(31))  //other
  console.log('Matched resources to categories successfully!')
  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
