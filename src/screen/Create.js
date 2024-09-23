import { View, Text, ScrollView, Linking, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Create = () => {
  const openYouTubeLink = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // Replace with actual video link
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      
       {/* Title for Tips */}
       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Tips for Creating To-Do Lists Efficiently
      </Text>
      
      {/* YouTube Video Section */}
      <TouchableOpacity onPress={openYouTubeLink} style={{ alignItems: 'center', marginBottom: 30, }}>
        <Image
          source={require('../../Images/youtube.png')} // Add a YouTube icon image here
          style={{ width: 60, height: 60, marginBottom: 10 }} // Adjust size as needed
        />
        <Text style={{ color: '#1e97f3', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
          Watch Tutorial on YouTube
        </Text>
      </TouchableOpacity>

     

      {/* Tip 1 */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        1. Prioritize Tasks
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Organize your to-do list by importance. Focus on high-priority tasks to ensure you tackle the most important things first.
      </Text>

      {/* Tip 2 */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        2. Break Tasks into Smaller Steps
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Break larger tasks into smaller, manageable steps. This will help prevent overwhelm and make tasks easier to complete.
      </Text>

      {/* Tip 3 */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        3. Set Deadlines
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Assign deadlines to each task. Having a timeline helps you stay focused and prevents procrastination.
      </Text>

      {/* Tip 4 */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        4. Use Categories or Labels
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Categorize tasks under work, personal, errands, etc. This helps in visually organizing your to-dos and switching between different types of tasks.
      </Text>

      {/* Tip 5 */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>
        5. Review and Update Daily
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Make it a habit to review and update your to-do list every day. This keeps your list relevant and helps you stay on top of your tasks.
      </Text>
    </ScrollView>
  );
};

export default Create;



// <TouchableOpacity onPress={openYouTubeLink} style={{ marginTop: 30, padding: 10, backgroundColor: '#1e97f3', borderRadius: 8 }}>
// <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>
//   Watch Tutorial on YouTube
// </Text>
// </TouchableOpacity>