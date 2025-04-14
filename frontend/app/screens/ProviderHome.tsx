import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomNavbar from '../components/BottomNavbar';

export default function ProviderHome() {
  // Sample dummy data (replace with real API data later)
  const businessName = "FixIt Services";
  const stats = {
    totalJobs: 20,
    scheduled: 5,
    completed: 15,
  };

  const scheduledServices = [
    { id: 1, title: 'Fan Repair', location: 'Baner', time: '3:00 PM' },
    { id: 2, title: 'Pipe Fixing', location: 'Aundh', time: '5:30 PM' },
  ];

  const jobRequests = [
    { id: 3, title: 'Geyser Installation', location: 'Kothrud' },
    { id: 4, title: 'AC Service', location: 'Wakad' },
  ];

  return (
    <ScrollView style={styles.container}>
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

      <View className="h-16 border-t border-gray-200 ">
        <BottomNavbar />
      </View>
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
  },
  jobCard: {
    backgroundColor: '#f9f9f9',
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
