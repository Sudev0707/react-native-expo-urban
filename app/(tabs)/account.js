import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AccountScreen = () => {
  // Sample data - replace with your actual data
  const user = {
    name: 'Sudev',
    email: 'sudev.com',
    membership: 'Gold Member',
    joinDate: 'Joined March 2023',
  };

  const orders = [
    { id: 'ORD-78901', date: '15 May 2025', service: 'AC Repair', status: 'Completed', amount: '₹1,499' },
    { id: 'ORD-67890', date: '10 May 2025', service: 'Salon Service', status: 'Completed', amount: '₹899' },
    { id: 'ORD-56789', date: '5 May 2025', service: 'Home Cleaning', status: 'Cancelled', amount: '₹1,299' },
  ];

  const upcomingServices = [
    { date: '25 May 2025', service: 'Pest Control', professional: 'Rajesh Kumar' },
    { date: '28 May 2025', service: 'Plumbing', professional: 'Vikram Singh' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:150}} showsVerticalScrollIndicator={false} >
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: "https://api.multiavatar.com/user123.png"}}
            style={styles.avatar}
          />
          {/* <View style={styles.membershipBadge}>
            <Text style={styles.membershipText}>{user.membership}</Text>
          </View> */}
        </View>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.joinDate}>{user.joinDate}</Text>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="wallet-outline" size={24} color="#0f6490" />
          <Text style={styles.actionText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="favorite-border" size={24} color="#0f6490" />
          <Text style={styles.actionText}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="notifications-outline" size={24} color="#0f6490" />
          <Text style={styles.actionText}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="question-circle-o" size={24} color="#0f6490" />
          <Text style={styles.actionText}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Orders */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        
        {/* {orders.map((order, index) => (
          <View key={index} style={styles.orderCard}>
            <View style={styles.orderInfo}>
              <Text style={styles.orderId}>Order #{order.id}</Text>
              <Text style={styles.orderDate}>{order.date}</Text>
              <Text style={styles.orderService}>{order.service}</Text>
            </View>
            <View style={styles.orderStatusContainer}>
              <Text 
                style={[
                  styles.orderStatus,
                  order.status === 'Cancelled' ? styles.statusCancelled : styles.statusCompleted
                ]}
              >
                {order.status}
              </Text>
              <Text style={styles.orderAmount}>{order.amount}</Text>
            </View>
          </View>
        ))} */}
      </View>

      {/* Upcoming Services */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Services</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        
        {/* {upcomingServices.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <View style={styles.serviceDateContainer}>
              <Text style={styles.serviceDate}>{service.date}</Text>
            </View>
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{service.service}</Text>
              <Text style={styles.serviceProfessional}>with {service.professional}</Text>
            </View>
            <TouchableOpacity style={styles.trackButton}>
              <Text style={styles.trackButtonText}>Track</Text>
            </TouchableOpacity>
          </View>
        ))} */}
      </View>

      {/* Account Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="person-outline" size={20} color="#666" />
          <Text style={styles.settingText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="location-outline" size={20} color="#666" />
          <Text style={styles.settingText}>Saved Addresses</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="card-outline" size={20} color="#666" />
          <Text style={styles.settingText}>Payment Methods</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
    paddingTop:80,

  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#0f6490',
  },
  membershipBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  membershipText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  joinDate: {
    fontSize: 12,
    color: '#999',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    marginTop: 8,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#4CAF50',
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
    marginVertical: 4,
  },
  orderService: {
    fontSize: 14,
    color: '#333',
  },
  orderStatusContainer: {
    alignItems: 'flex-end',
  },
  orderStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusCompleted: {
    backgroundColor: '#E8F5E9',
    color: '#2E7D32',
  },
  statusCancelled: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
  },
  orderAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  serviceDateContainer: {
    backgroundColor: '#E3F2FD',
    padding: 8,
    borderRadius: 6,
    marginRight: 12,
  },
  serviceDate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceProfessional: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  trackButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  trackButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
});

export default AccountScreen;