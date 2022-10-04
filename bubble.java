//bubble sort
class HelloWorld {
    public static void main(String[] args) {
        int arr[]={5,2,1,4,7,8};
        for(int i=0;i<arr.length-1;i++)
        {
            for(int j=0;j<arr.length-1;j++)
            {
                if(arr[j]>arr[j+1])
                {
                int temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
                }
            }
        }
        for(int i=0;i<arr.length;i++)
        {
        System.out.print(arr[i]+",");
        }
    }
}
//sorting objets using bubble sort
import java.util.*;
class Employee implements comparable<Employee>{
    String Name;
    long salary;
    Employee(String N,long s)
    {
        Name=N;
        salary=s;
    }
    public void show()
    {
        System.out.println(Name );
    }
}
class Main
{
    public static void main(String[] args) {
        Employee e[]=new Employee[5];
        e[0]=new Employee("sai",30000);
        e[1]=new Employee("ram",40000);
        e[2]=new Employee("lally",20000);
        e[3]=new Employee("deekshu",50000);
        e[4]=new Employee("krishna",30000);
        Employee temp;
        for (int j = 0; j <e.length; j++)
        {
            for (int i = j + 1; i <e.length; i++)
            {
                if (e[j].compareTo(e[i]) > 0)
                {
                    temp = e[j];
                    e[j] = e[i];
                    e[i] = temp;
                }
            }
        }
        for(int i=0;i<e.length;i++)
        {
           e[i].show();
        }
    }
}
