# Mobile-Application-545
Project Name: Wake ME up
By Davis Zhong, Aylin, Nicola <br>
Version #1 <br>
<br>

## Project for CSS 545
1. I intend for the final project to be runnable on an Android device, but potentially also be runnable on an iOS device. Ideally my application would be functional on my personal iPhone but I've had trouble doing this in the past with my currently planned project structure so I will at least make it functional on virtual Android emulators and see if I can move it to my iPhone at a later time.
2. I intend to use TypeScript and React Native on VSCode to develop my application but may continue to do research on if there is a better framwork me to use. This is the structure that I have developed with before but I am actively looking for a different perhaps more robust or convenient way to achieve my goal.
3. I want to explore cross-platform development as I will be developing from a Windows computer for a iOS device but if I come across limitations I may decide to stick to virtual Android emulators to run my project until I find a better solution.


## Summary of Project
(Base this summary on the pitch)
Our project aims to develop a non-intrusive alarm system that personalizes wake-up alerts using existing Bluetooth devices like AirPods and wireless headphones. By offering a peaceful and effective way to wake up without disturbing others, we enhance the morning routine for users in shared living spaces or sensitive environments.
## Project Analysis
### Value Proposition 
(What are the pain points or problems you’re addressing?  For whom?  If possible, cite facts that support your claim that these are real pain points/problems to address)
We address the pain points of waking up aggressively in shared living situations, which can disrupt the sleep of others and create stress. With 83% of adults using wireless earbuds (Statista, 2024), our solution caters to this growing demographic, providing a gentle, personalized wake-up experience that fosters a peaceful environment.
### Primary Purpose
(Summarize the purpose of the project – could be something focused on the benefit of the target audience, your customers, your “company,” or even public good)
The primary purpose of this project is to enhance the morning routines of users by providing a quiet and effective way to wake up. This app is focused on benefiting individuals who live in shared spaces, allowing them to rise without causing disturbances.
### Target Audience
(State your target demographic, be as specific as you can.  Why are you targeting this demographic?  How do you plan you reach it?)
Our target audience includes adults aged 18-45 who live in shared apartments or homes and use wireless earbuds. We are targeting this demographic because they value personal space and quiet environments. To reach them, we will utilize social media marketing, collaborations with lifestyle influencers, and targeted ads highlighting the app's unique benefits.
### Success Criteria
(How will you know whether your app was successful?  Financial gain?  User satisfaction?  Market share?  Public good?  How will you measure success?)
Success will be measured through user satisfaction surveys, download metrics, and user engagement analytics. Financial success will be gauged by in-app purchases and subscription models. Additionally, we will track the app's ratings and feedback in app stores to ensure it meets user expectations.
### Competitor Analysis
(Summarize strengths/weaknesses of your competitors as compared to you – does not have to be in-depth, focus on things that relate directly to your purpose and value prop)
Competitors may include traditional alarm clock apps and smart alarm systems. However, our strengths lie in personalized alerts through existing Bluetooth devices, offering a seamless user experience. Competitors often lack the non-intrusive, customizable features that we provide. Weaknesses of competitors include high costs and complex setups that may not suit users looking for simplicity.
### Monetization Model
(Briefly propose a monetization model)
We propose a freemium model, offering basic alarm functionalities for free while charging for premium features like advanced alarm customization, additional sound options, and the ability to integrate with smart home devices.
### Initial Design
The purpose of this section is to define the “Minimum Viable Product” (MVP).  It may also be useful to call out the scope and expected/known limitations for your product here.
The Minimum Viable Product (MVP) will focus on essential features: the ability to set alarms, play audio alerts through Bluetooth devices, and customize alert tones. Expected limitations include initial support for only specific audio formats and potential connectivity issues with some Bluetooth devices.

### UI/UX Design
(Call out important UI/UX components to have an MVP – does not have to be polished, but should keep the audience, purpose, and value prop in mind)

### Technical Architecture
(What are the necessary components to support an MVP?  Data structures?  Storage considerations?  Web/cloud interactions?  Be sure to put in some thoughts as to how to measure your success here.  Call out dependencies on 3rd party services/APIs here, too) <br> <br>
**Necessary components for the MVP include:**
- **Data Structures:** Alarm configurations (time, sound, repeat settings).
- **Storage Considerations:** Local storage for user preferences and alarm data.
- **Web/Cloud Interactions:** Optional cloud storage for syncing alarms across devices.
- **Dependencies:** Use of native audio playback libraries and Bluetooth APIs. <br> <br>

**Most important and basic design for the MVP would be:** <br>
- Well designed timer that counts down from user’s specified amount of time.
- Instructions for the user to already have a bluetooth device linked via their phone’s speaker system.
- Well designed home page that has all of this setup
Audio file playing that plays to system default speaker.
- Local storage for application state and user preferences (volume, audio file).
- The MVP is successful if the timer counts down to zero from user input time and plays audio through connected bluetooth device. <br> <br>

**How to measure our success:** <br>
The big metric on success for us is reliability of the application (i.e. how often does it fail to alarm or fail to alarm through headphones). That number of failures should be as close to zero as possible because if it’s not then nobody will want to use the application. Having as low of an impact on device battery is also important as well as ensuring that our application is “clean” and does not cause the device to run out of memory. User retention is additionally an important metric. If users are downloading our application and only using it once then we have failed. Additionally, having consistent functionality between the two platforms is important for success. 

### Challenges and Open Questions
Identify technical challenges that may come up (e.g. hardware limitations, access to data/services, performance issues, etc.) and propose some solutions to the identified challenges.  Also include questions on matters that you are unsure/unclear about that requires feedback from peers, users, or additional research.
One of the issues that we will likely encounter has to do with cross platform development as a whole and more specifically when we attempt to run the app on iOS while we are doing development exclusively on Windows. Necessary tools for iOS such as Xcode are only available for macOS so at some point we will need to experiment with the possibility of a virtual machine or emulator. One of our team members has access to an older mac that we could potentially try using, however that is an untested pathway and could end up not working. A third potential solution is to use one of the iMacs available in the computer science graduate lab, however, those will likely come with their own limitations and challenges regarding necessary software installation. Permissions for accessing the phone’s default audio system will also present a challenge. Especially because of our intent to develop cross platform. differences between iOS and Android systems and how they expect permissions to be requested could cause errors. Using react native libraries like react-native-permissions can help manage permissions across the two platforms more consistently. Another challenge we are likely to have is knowing when a bluetooth device is connected to the system. We need to know this as our alarms should only ring through headphones and not the phone’s main speakers. This will be different between the two systems and we will need to handle both appropriately. We will need to detect bluetooth connection events and also figure out how to route audio properly so it is only audible through headphones. Data storage will also be a challenge that is made more difficult because of the difference between iOs and Android. For credentials we could use something like react-native-keychain as it is cross platform compatible and uses encryption. SQLite Databases are supported within react native and are cross platform compatible as well as being capable of supporting more storage. Dependencies will also be a challenge especially for us developing in a group. React native has you add dependencies through the command line and we should track these in comments at the top of our code. Finally, developing this application in a team will present its own set of challenges. We believe these can be solved by having frequent meeting where we assign work and discuss any problems we are having. Obviously we will also be using a source code repository to track changes to aid in our workflow. Finally, setting expectations of each member and what work they are going to be doing. 
As for questions that require additional research or potential feedback from peers, we are curious as to if they would be interested in our application having an account associated with it so that alarms would be saved. Additionally, if we were to use the cloud for such a feature, how would we manage this in our cross platform application? This will require additional research. We also have the question of how multiple bluetooth device playback would work? Is that something that is possible cross platform? And for our peers, is that a feature that would even be desirable? We also need to do more research on how to implement this application to run in the background since it’s an alarm application that would likely be beneficial. 
