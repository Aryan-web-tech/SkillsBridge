import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomNavbar from '../components/BottomNavbar';
import Header from '../components/Header';

export default function ProviderHome() {
  // Sample dummy data (replace with real API data later)
  const businessName="FixIt Services";


  const stats = {
    totalJobs: 20,
    scheduled: 5,
    completed: 15,
  };

  const StatBox = ({ label, value }: { label: string; value: number }) => (
    <View className="flex-1 bg-accent p-4 rounded-xl items-center mr-2">
      <Text className="text-xl font-bold text-darkText">{value}</Text>
      <Text className="text-sm text-gray-700">{label}</Text>
    </View>
  );
  
  // Inside your component's return:
  <View className="flex-row mb-4">
    <StatBox label="Total Jobs" value={stats.totalJobs} />
    <StatBox label="Scheduled" value={stats.scheduled} />
    <StatBox label="Completed" value={stats.completed} />
  </View>

  const scheduledServices = [
    { id: 1, title: 'Fan Repair', location: 'Baner', time: '3:00 PM' },
    { id: 2, title: 'Pipe Fixing', location: 'Aundh', time: '5:30 PM' },
  ];

  const jobRequests = [
    { id: 3, title: 'Geyser Installation', location: 'Kothrud' },
    { id: 4, title: 'AC Service', location: 'Wakad' },
    { id: 5, title: 'TV Service', location: 'Warje' },
    
  ];

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Text style={styles.businessName}>{businessName}</Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <StatBox label="Total Jobs" value={stats.totalJobs} />
        <StatBox label="Scheduled" value={stats.scheduled} />
        <StatBox label="Completed" value={stats.completed} />
      </View>

      {/* Scheduled Services */}
      <Text style={styles.sectionTitle}>Scheduled Services</Text>
      {scheduledServices.map((job) => (
        <View key={job.id} style={styles.jobCard}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobInfo}>{job.location} • {job.time}</Text>
        </View>
      ))}

      {/* Job Requests */}
      <Text style={styles.sectionTitle}>New Job Requests</Text>
      {jobRequests.map((job) => (
        <View key={job.id} style={styles.jobCard}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobInfo}>{job.location}</Text>
        </View>
      ))}

    </ScrollView>
  );
}



const StatBox = ({ label, value }) => (
  <View style={styles.statBox}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  businessName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0D0672',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: '#0D0672',
  },
  jobCard: {
    backgroundColor: '#F0F9FF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  jobInfo: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
