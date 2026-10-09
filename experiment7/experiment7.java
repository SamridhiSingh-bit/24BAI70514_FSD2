import java.util.Scanner;

class Employee {
    private String name;
    private double basicSalary;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setBasicSalary(double basicSalary) {
        if (basicSalary > 0) {
            this.basicSalary = basicSalary;
        }
    }

    public double getBasicSalary() {
        return basicSalary;
    }

    public double calculateSalary() {
        return basicSalary;
    }
}

class PermanentEmployee extends Employee {
    @Override
    public double calculateSalary() {
        return getBasicSalary() + getBasicSalary() * 0.20;
    }
}

class ContractEmployee extends Employee {
    @Override
    public double calculateSalary() {
        return getBasicSalary() + getBasicSalary() * 0.10;
    }
}


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < T; i++) {
            char type = sc.nextLine().charAt(0);
            String name = sc.nextLine();
            double salary = sc.nextDouble();
            sc.nextLine();

            Employee emp;
            if (type == 'P')
                emp = new PermanentEmployee();
            else
                emp = new ContractEmployee();

            emp.setName(name);
            emp.setBasicSalary(salary);

            System.out.println("Employee: " + emp.getName());
            System.out.printf("Final Salary: %.2f%n", emp.calculateSalary());
        }

        sc.close();
    }
}