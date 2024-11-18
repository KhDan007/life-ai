import { Slot, Redirect } from 'expo-router';
import { useAuth } from '../../context/auth';

export default function AppLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
}